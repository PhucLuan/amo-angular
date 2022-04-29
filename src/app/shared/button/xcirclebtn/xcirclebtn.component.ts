import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalbtnComponent } from '../modalbtn/modalbtn.component';

@Component({
  selector: 'app-xcirclebtn',
  templateUrl: './xcirclebtn.component.html',
  styleUrls: ['./xcirclebtn.component.css']
})
export class XcirclebtnComponent implements OnInit {

  @Input() public isDisable! : boolean;
  @Input() public title! : string;
  @Input() public message! : string;
  @Input() public confirmBtn! : string;
  @Input() public cancelBtn! : string;

  @Output() xcirclebtnClickYes = new EventEmitter<string>();
  @Output() afterModalClose = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    if (this.isDisable) {
      return;
    }
    const dialogRef = this.dialog.open(ModalbtnComponent, {
      data: {
        title: this.title,
        message: this.message,
        confirmBtn: this.confirmBtn,
        cancelBtn: this.cancelBtn
      },
    })

    //Emit event when User click "yes" option on dialog to where use this button
    dialogRef.componentInstance.ClickYes$.subscribe((res) => {
      this.xcirclebtnClickYes.emit("XcircleBtnIsClicked");
    });

    dialogRef.componentInstance.dialogRef.afterClosed().subscribe(() => {
      this.afterModalClose.emit();
    })
  }
}
