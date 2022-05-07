import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, catchError, EMPTY } from 'rxjs';
import { AssignmentItem } from 'src/app/core/models/assignment-item';
import { HomeService } from 'src/app/core/services/homeservice/home.service';
import { ArrowcirclebtnComponent } from 'src/app/shared/button/arrowcirclebtn/arrowcirclebtn.component';
import { CancelbtnComponent } from 'src/app/shared/button/cancelbtn/cancelbtn.component';
import { CheckbtnComponent } from 'src/app/shared/button/checkbtn/checkbtn.component';
import { ModalDetailInfoComponent } from 'src/app/shared/modal-detail-info/modal-detail-info.component';



interface DisplayItem {
  assetCode: string;
  assetName: string;
  assetSpecification: string;
  assignedTo: string;
  assignedBy: string;
  assignedDate: string;
  stateName: string;
  note: string;
}
@Component({
  selector: 'app-hometable',
  templateUrl: './hometable.component.html',
  styleUrls: ['./hometable.component.css']
})


export class HometableComponent implements AfterViewInit {

  displayedColumns: string[] = [
    'assetCode',
    'assetName',
    'assignedDate',
    'stateName',
    'action'
  ];
  data: AssignmentItem[] = [];
  dataSource = new MatTableDataSource<any>();

  isOpenModalDetail: boolean = true;

  @ViewChild(MatSort) sort!: MatSort;
  term$ = new BehaviorSubject<string>('');
  resultsLength = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //Binding button
  @ViewChild(CheckbtnComponent) private checkcomponent!: CheckbtnComponent;
  @ViewChild(CancelbtnComponent) private canclecomponent!: CancelbtnComponent;
  @ViewChild(ArrowcirclebtnComponent) private arrowcirclecomponent!: ArrowcirclebtnComponent;
  private currentId: string = '';

  constructor(
    private homeService: HomeService,
    public dialog: MatDialog
  ) { }

  ngAfterViewInit() {
    this.LoadData();
  }

  openDialogViewDetailInfo(datasource: DisplayItem): void {
    if (this.isOpenModalDetail) {
      let keyDisplayItem = ["Asset Code", "Asset Name", "Specification", "Assigned to", "Assigned by", "Assigned Date", "State", "Note"];

      let valueDisplayItem: DisplayItem = {
        assetCode: datasource.assetCode,
        assetName: datasource.assetName,
        assetSpecification: datasource.assetSpecification,
        assignedTo: datasource.assignedTo,
        assignedBy: datasource.assignedBy,
        assignedDate: datasource.assignedDate,
        stateName: datasource.stateName,
        note: datasource.note,
      }
      console.log(datasource)
      const dialogRef = this.dialog.open(ModalDetailInfoComponent, {

        data: {
          title: "Detailed Assignment Information",
          keys: keyDisplayItem,
          values: Object.values(valueDisplayItem)
        },
      });
    }
  }

  onClickYes(res: string) {
    //do something before close dialog
    if (res === "CheckBtnIsClicked") {
      this.AcceptAssignment(this.currentId);
      this.checkcomponent.closeDialog();
    }
    if (res === "CancelBtnIsClicked") {
      this.DeclineAssignment(this.currentId);
      this.canclecomponent.closeDialog();
    }
    if (res === "ArrowcircleBtnIsClicked") {
      this.RequestForReturning({ Id: this.currentId, UserId: localStorage.getItem('userId') ?? '' });
      this.arrowcirclecomponent.closeDialog();
    }
    //this.LoadData();
    console.log("Emit event click yes " + res + " " + this.currentId)
  }

  onBtnInRowClicked(assignmentId: string) {
    //Prevent popup detail info before turn on popup of button
    this.isOpenModalDetail = false;
    //Update id object
    this.UpdateAssignmentId(assignmentId)
  }

  LoadData() {
    console.log("LoadData")
    this.homeService.GetDataByUserId(localStorage.getItem('userId') ?? "")
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.error instanceof Error) {
            console.error('An error occurred:', error.error.message);
          } else {
            console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
          }
          return EMPTY;
        }))
      .subscribe((data) => {
        console.log(data)
        this.dataSource.data = data;

      });
  }

  AcceptAssignment(assignmentId: string): void {
    this.homeService.AcceptAssignment(assignmentId)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.error instanceof Error) {
            console.error('An error occurred:', error.error.message);
          } else {
            console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
          }
          return EMPTY;
        })).subscribe(data => {console.log(data)
          this.LoadData();
        });
  }

  DeclineAssignment(assignmentId: string): void {
    this.homeService.DeclineAssignment(assignmentId)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.error instanceof Error) {
            console.error('An error occurred:', error.error.message);
          } else {
            console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
          }
          return EMPTY;
        })).subscribe(data => {console.log(data)
          this.LoadData();
        });
  }

  RequestForReturning(assignment: any): void {
    this.homeService.RequestReturningAssignment(assignment)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.error instanceof Error) {
            console.error('An error occurred:', error.error.message);
          } else {
            console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
          }
          return EMPTY;
        })).subscribe(data => 
          {
            console.log(data)
            this.LoadData();
          });
  }
  UpdateAssignmentId(assignmentId: string) {
    this.currentId = assignmentId;
  }

  UpdateIsOpenModalDetail() {
    this.isOpenModalDetail = true;
  }
}

