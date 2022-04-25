import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalbtnComponent } from '../modalbtn/modalbtn.component';

@Component({
  selector: 'app-arrowcirclebtn',
  templateUrl: './arrowcirclebtn.component.html',
  styleUrls: ['./arrowcirclebtn.component.css']
})
export class ArrowcirclebtnComponent implements OnInit {

  @Input() public isDisable! : boolean;
  @Input() public title! : string;
  @Input() public message! : string;
  
  @Output() arrowcirclebtnClickYes = new EventEmitter<string>();
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
        message: this.message
      },
    })

    //Emit event when User click "yes" option on dialog to where use this button
    dialogRef.componentInstance.ClickYes$.subscribe((res) => {
      this.arrowcirclebtnClickYes.emit("ArrowcircleBtnIsClicked");
    });

    dialogRef.componentInstance.dialogRef.afterClosed().subscribe(() => {
      this.afterModalClose.emit();
    })
  };

  closeDialog(): void {
    this.dialog.closeAll();
  };
}
