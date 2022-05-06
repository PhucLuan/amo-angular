import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/manageuser/user.service';

export function getAge(dateString: string): number {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
export function dateOfBirthValidator(control: AbstractControl) {
  if (control.value == '') {
    return null;
  }

  return !(getAge(control.value) >= 18) ? { invalidDateOfBirth: true } : null;
}
export function joinedDateWeekendValidator(control: AbstractControl) {
  if (control.value == '') {
    return null;
  }
  const day = new Date(control.value).getDay();

  return (day === 0 || day === 6) ? { invalidWeekendJoinedDate: true } : null;
}
export const joinedDateAfterDoBValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const dateOfBirthControl = control.get('DateOfBirth');
  const joinedDateControl = control.get('JoinedDate');
  const dateOfBirth = new Date(dateOfBirthControl?.value).setHours(0, 0, 0, 0);
  const joinedDate = new Date(joinedDateControl?.value).setHours(0, 0, 0, 0);

  return !(joinedDate > dateOfBirth) ? { invalidJoinedDateAfterDoB: true } : null;
};

@Component({
  selector: 'app-manageuser-form',
  templateUrl: './manageuser-form.component.html',
  styleUrls: ['./manageuser-form.component.css']
})

export class ManageuserFormComponent implements OnInit {

  public defaultdate = new Date();
  public userForm: FormGroup = this.formBuilder.group(
    {
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      DateOfBirth: ['', [Validators.required, dateOfBirthValidator]],
      Gender: ['', Validators.required],
      JoinedDate: ['', [Validators.required, joinedDateWeekendValidator]],
      Type: ['', Validators.required],
      Email: ['', Validators.required],
      UserName: ['', Validators.required],
    },
    {
      validators: joinedDateAfterDoBValidator
    });

  public genders = [
    { id: 'Male', name: 'Male' },
    { id: 'Female', name: 'Female' }
  ];

  public TypeSelect = new FormControl();
  public typeList = [
    { id: 'Admin', name: 'Administrator' },
    { id: 'Staff', name: 'Staff' }
  ];

  private userId : string = "";
  private isAddMode: boolean = true;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.GetAsset()
  }
  GetAsset(): void {
    this.userId = this.route.snapshot.paramMap.get('id') ?? "";
    if (!(this.userId == null || this.userId == undefined || this.userId == "")) {
      this.isAddMode = false;
      this.userForm.get('FirstName')?.disable({ onlySelf: true });
      this.userForm.get('LastName')?.disable({ onlySelf: true });
      this.userForm.get('UserName')?.disable({ onlySelf: true });
      this.userForm.get('Email')?.disable({ onlySelf: true });
      this.userForm.get('Type')?.disable({ onlySelf: true });
      this.InitialValue(this.userId);
    }
  }
  onSubmit() {
    console.log(this.userForm.value)
    if (this.isAddMode){
      this.userService.CreateUser(this.userForm.value).subscribe(x => console.log(x));
    }
    else
    this.userService.UpdateUser(this.userId,this.userForm.getRawValue()).subscribe(x => console.log(x));
    
    this.router.navigate(['/user'])
  }

  OnCancelClick() {
    this.router.navigate(['/user'])
  }

  FormatDate(date: any) {
    return date.split("/").reverse().join("-");
  }
  InitialValue(userId: string): void {

    this.userService.GetUserById(userId)
      .subscribe(
        x => {
          this.userForm.patchValue({
            FirstName: x.firstName,
            LastName: x.lastName,
            DateOfBirth: this.FormatDate(x.dateOfBirth),
            Gender: x.gender,
            JoinedDate: this.FormatDate(x.joinedDate),
            Type: x.type,
            Email: x.email,
            UserName: x.userName,
          })
        }
      )
  }
}
