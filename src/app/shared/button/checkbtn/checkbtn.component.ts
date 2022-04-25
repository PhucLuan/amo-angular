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
      data: {
        title: "Are you sure?"
      },
    })

    dialogRef.componentInstance.ClickYes$.subscribe((res) => {
      //console.log(res+" : from modal");
      this.checkbtnClickYes.emit("test");
    });

    dialogRef.componentInstance.dialogRef.afterClosed().subscribe(() => {
      this.afterModalClose.emit();
    })
  };
    
  closeDialog(): void {
    //console.log("ahihihihihih");
    this.dialog.closeAll();
  }
}
