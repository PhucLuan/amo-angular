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
  const dateOfBirthControl = control.get('dateOfBirth');
  const joinedDateControl = control.get('joinedDate');
  const dateOfBirth = new Date(dateOfBirthControl?.value).setHours(0, 0, 0, 0);
  const joinedDate = new Date(joinedDateControl?.value).setHours(0, 0, 0, 0);

  return !(joinedDate > dateOfBirth) ? { invalidJoinedDateAfterDoB: true } : null;
};
// export function joinedDateAfterDoBValidator(control: AbstractControl) {

//   const _dateOfBirth = control.get('dateOfBirth');
//   const _joinedDate = control.get('joinedDate');
//   //console.log(_dateOfBirth)
//   if (_dateOfBirth == null|| !_joinedDate) {
//     return null;
//   }

//   const dateOfBirth = new Date(_dateOfBirth.value).setHours(0, 0, 0, 0);
//   const joinedDate = new Date(_joinedDate.value).setHours(0, 0, 0, 0);
//   console.log(dateOfBirth-joinedDate)
//   return !(joinedDate > dateOfBirth) ? { invalidJoinedDateAfterDoB: true } : null;
// }

@Component({
  selector: 'app-manageuser-form',
  templateUrl: './manageuser-form.component.html',
  styleUrls: ['./manageuser-form.component.css']
})

export class ManageuserFormComponent implements OnInit {

  public defaultdate = new Date();
  public userForm: FormGroup = this.formBuilder.group(
    {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', [Validators.required, dateOfBirthValidator]],
      gender: ['', Validators.required],
      joinedDate: ['', [Validators.required, joinedDateWeekendValidator]],
      type: ['', Validators.required],
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

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.userForm.value)
  }

  OnCancelClick() {
    this.router.navigate(['/user'])
  }

  FormatDate(date: any) {
    return date.split("/").reverse().join("-");
  }
}
