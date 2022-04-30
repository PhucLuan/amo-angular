import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-asset-delete-modal',
  templateUrl: './asset-delete-modal.component.html',
  styleUrls: ['./asset-delete-modal.component.css']
})
export class AssetDeleteModalComponent implements OnInit {
  @Output() ClickYes$ = new EventEmitter<boolean>();

  constructor(
    public dialogRef: MatDialogRef<AssetDeleteModalComponent>,
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
