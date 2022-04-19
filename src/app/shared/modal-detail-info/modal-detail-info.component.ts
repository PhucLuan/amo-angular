import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-detail-info',
  templateUrl: './modal-detail-info.component.html',
  styleUrls: ['./modal-detail-info.component.css']
})

export class ModalDetailInfoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalDetailInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
