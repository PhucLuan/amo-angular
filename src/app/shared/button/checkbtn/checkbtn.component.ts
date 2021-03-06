import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalbtnComponent } from '../modalbtn/modalbtn.component';

@Component({
  selector: 'app-checkbtn',
  templateUrl: './checkbtn.component.html',
  styleUrls: ['./checkbtn.component.css']
})
export class CheckbtnComponent implements OnInit {

  @Input() public isDisable! : boolean;
  @Input() public title! : string;
  @Input() public message! : string;
  @Input() public confirmBtn! : string;
  @Input() public cancelBtn! : string;

  @Output() checkbtnClickYes = new EventEmitter<string>();
  @Output() afterModalClose = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    if (this.isDisable) {
      return;
    }
    const dialogRef = this.dialog.open(ModalbtnComponent, {
      panelClass: 'custom-modalbox',
      data: {
        title: this.title,
        message: this.message,
        confirmBtn: this.confirmBtn,
        cancelBtn: this.cancelBtn
      },
    })

    //Emit event when User click "yes" option on dialog to where use this button
    dialogRef.componentInstance.ClickYes$.subscribe((res) => {
      this.checkbtnClickYes.emit("CheckBtnIsClicked");
    });

    dialogRef.componentInstance.dialogRef.afterClosed().subscribe(() => {
      this.afterModalClose.emit();
    })
  };
    
  closeDialog(): void {
    this.dialog.closeAll();
  }
}
