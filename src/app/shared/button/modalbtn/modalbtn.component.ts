import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modalbtn',
  templateUrl: './modalbtn.component.html',
  styleUrls: ['./modalbtn.component.css']
})
export class ModalbtnComponent implements OnInit {

  @Output() ClickYes$ = new EventEmitter<boolean>();

  constructor(
    public dialogRef: MatDialogRef<ModalbtnComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  onClickYes(): void {
    this.ClickYes$.emit(true);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
