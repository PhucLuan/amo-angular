import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-detail-info',
  templateUrl: './modal-detail-info.component.html',
  styleUrls: ['./modal-detail-info.component.css']
})

export class ModalDetailInfoComponent implements OnInit {

  @Output() ClickYes = new EventEmitter<boolean>();
  
  constructor(
    public dialogRef: MatDialogRef<ModalDetailInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
  }

  handleSave(): void {
    this.ClickYes.emit(true);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
