import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AssignmentService } from 'src/app/core/services/assignment/assignment.service';
import { AssetPopupComponent } from '../asset-popup/asset-popup.component';

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css']
})
export class AssignmentFormComponent implements OnInit {

  public defaultdate = new Date();
  
  
  public assignmentForm: FormGroup = this.formBuilder.group({
    userID: ['', Validators.required],
    assetID: ['', Validators.required],
    assetName: ['', Validators.required],
    assignedDate: [this.FormatDate(this.defaultdate.toISOString().split('T')[0]), Validators.required],
    note: ['', Validators.required],
  });
  
  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private assignmentService : AssignmentService,
    private router: Router) { }
  
  ngOnInit(): void {
  }
  ngAfterViewInit():void{
    this.assignmentService.asset$.subscribe(
      x => {
        console.log(x)
        this.assignmentForm.patchValue({
          assetName : x.name,
          assetID : x.id
        })
      }
    )
  }
  ClickGetAsset(e : any): void {
    const dialogRef = this.dialog.open(AssetPopupComponent, {

      data: {
        title: "Asset List"
      },
    }); 
  }
  onSubmit(){
    console.log(this.assignmentForm.value)
  }
  OnCancelClick(){
    this.router.navigate(['/assignment'])
  }
  FormatDate(date: any) {
    return date.split("/").reverse().join("-");
  }
}
