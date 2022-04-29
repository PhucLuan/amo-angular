import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-asset-modal',
  templateUrl: './asset-modal.component.html',
  styleUrls: ['./asset-modal.component.css']
})
export class AssetModalComponent implements OnInit {

  displayedColumns: string[] = ['assignedDate', 'assignedTo', 'assignedBy', 'returnDate'];

  constructor(
    public dialogRef: MatDialogRef<AssetModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
