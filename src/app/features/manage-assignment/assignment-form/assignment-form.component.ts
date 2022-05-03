import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from 'src/app/core/services/assignment/assignment.service';
import { AssetPopupComponent } from '../asset-popup/asset-popup.component';
import { UserPopupComponent } from '../user-popup/user-popup.component';

// export function AssignedDateValidator(): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     const currentDate = new Date();
//     console.log(control.value)
//     //const assignedDateValidator = nameRe.test(control.value);
//     return control.value < currentDate ? {invalidAssignedDate: true} : null;
//   };
// }

export function AssignedDateValidator(control: AbstractControl){
  const today = new Date().setHours(0,0,0,0);
  const assignedDate = new Date(control.value).setHours(0,0,0,0);
  return assignedDate < today ? {invalidAssignedDate: true} : null;
}

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css']
})

export class AssignmentFormComponent implements OnInit {

  public defaultdate = new Date();
  public IsAddMode: boolean = true;
  public assignmentId: string = "";
  public currentAssignment: any;

  public assignmentForm: FormGroup = this.formBuilder.group({
    userID: ['', Validators.required],
    assignedTo: ['', Validators.required],
    assetID: ['', Validators.required],
    assetName: ['', Validators.required],
    assignedDate: [this.FormatDate(this.defaultdate.toISOString().split('T')[0]), [Validators.required,AssignedDateValidator]],
    note: ['', Validators.required],
  });

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private assignmentService: AssignmentService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {

    this.assignmentService.asset$.subscribe(
      x => {
        if (x !== null) {
          this.assignmentForm.patchValue({
            assetName: x.name,
            assetID: x.id
          })
        }
      }
    )
    this.assignmentService.user$.subscribe(
      x => {
        if (x !== null) {
          console.log(x)
          this.assignmentForm.patchValue({
            assignedTo: x.userName,
            userID: x.id
          })
        }
      }
    )
  }

  ngAfterViewInit(): void {
    this.assignmentId = this.route.snapshot.paramMap.get('id') ?? "";
    if (this.assignmentId !== "") {
      this.IsAddMode = false;
      this.assignmentService.GetAssignmentById(this.assignmentId)
        .subscribe(
          x => //console.log(x)
            this.assignmentForm.patchValue({
              assetName: x.assetName,
              assetID: x.assetID,
              note: x.note,
              assignedDate: this.FormatDate(x.assignedDate),
              userID: x.userID,
              assignedTo: x.assignedTo
            })
        )
    }

  }

  ClickGetAsset(e: any): void {
    const dialogRef = this.dialog.open(AssetPopupComponent, {
      data: {
        title: "Asset List"
      },
    });
  }
  ClickGetUser(e: any): void {
    const dialogRef = this.dialog.open(UserPopupComponent, {
      data: {
        title: "User List"
      },
    });
  }
  onSubmit() {
    const { assetName, assignedTo, ...newObj } = this.assignmentForm.value;
    if (this.IsAddMode) {
      console.log("Add", newObj)
      this.assignmentService.CreateAssignment(newObj).subscribe(x => console.log(x));
      this.router.navigate(['/assignment']);
    }
    else{
      console.log("Edit", newObj)
      //this.assignmentService.UpdateAssignment(this.assignmentId ?? '' ,newObj).subscribe(x => console.log(x));
      //this.router.navigate(['/assignment'])
    }
      
  }
  OnCancelClick() {
    this.router.navigate(['/assignment'])
  }
  FormatDate(date: any) {
    return date.split("/").reverse().join("-");
  }
}
