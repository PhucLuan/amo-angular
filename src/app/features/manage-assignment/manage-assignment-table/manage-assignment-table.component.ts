import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { catchError, debounceTime, distinctUntilChanged, EMPTY, map, merge, of, startWith, switchMap } from 'rxjs';
import { AssignmentItem } from 'src/app/core/models/assignment-item';
import { StatePipe } from 'src/app/core/pipe/state.pipe';
import { AssignmentService } from 'src/app/core/services/assignment/assignment.service';
import { ArrowcirclebtnComponent } from 'src/app/shared/button/arrowcirclebtn/arrowcirclebtn.component';
import { XcirclebtnComponent } from 'src/app/shared/button/xcirclebtn/xcirclebtn.component';
import { ModalDetailInfoComponent } from 'src/app/shared/modal-detail-info/modal-detail-info.component';

@Component({
  selector: 'app-manage-assignment-table',
  templateUrl: './manage-assignment-table.component.html',
  styleUrls: ['./manage-assignment-table.component.css']
})
export class ManageAssignmentTableComponent implements AfterViewInit {

  displayedColumns: string[] = [
    'number',
    'AssetCode',
    'AssetName',
    'AssignedTo',
    'AssignedBy',
    'AssignedDate',
    'State',
    'action'
  ];
  data: AssignmentItem[] = [];
  isOpenModalDetail: boolean = true;

  private currentId: string = '';

  @ViewChild(XcirclebtnComponent) private xcirclecomponent!: XcirclebtnComponent;
  @ViewChild(ArrowcirclebtnComponent) private arrowcirclecomponent!: ArrowcirclebtnComponent;

  /*sort, search, paging*/
  @ViewChild(MatSort) sort!: MatSort;
  resultsLength = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  stateFilter = "";
  dateFilter = "";
  searchFilter = "";

  constructor(
    private assignmentService: AssignmentService, 
    public dialog: MatDialog, 
    private router: Router,
    private statePipe: StatePipe) { }

  ngAfterViewInit(): void {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.assignmentService.searchKey$.subscribe(() => this.paginator.pageIndex = 0);
    this.assignmentService.stateSelected$.subscribe(() => this.paginator.pageIndex = 0);
    this.assignmentService.assignedDateSelected$.subscribe(() => this.paginator.pageIndex = 0);
    this.LoadData();
  }

  LoadData(): void {
    merge(
      this.sort.sortChange,
      this.assignmentService.searchKey$.pipe(debounceTime(1000), distinctUntilChanged()),
      this.assignmentService.assignedDateSelected$.pipe(debounceTime(1000), distinctUntilChanged()),
      this.paginator.page,
      this.assignmentService.stateSelected$,
      //this.assignmentService.categorySelected$
      )
      .pipe(
        startWith({}),
        switchMap((searchTerm) => {
          

          if (searchTerm.type == 'state') {
            this.stateFilter = searchTerm.value;
          }
          if (searchTerm.type == 'searchKey') {
            this.searchFilter = searchTerm.value;
          }
          if (searchTerm.type == 'assignedDate') {
            this.dateFilter = searchTerm.value;
          }
          // if (searchTerm && typeof searchTerm == 'string') {
          //   this.searchFilter = searchTerm.toString();

          // }
          // else
          //   //keep value of search string when change filter
          //   if (!(searchTerm.type == 'state' || typeof searchTerm == 'object')) {
          //     this.searchFilter = ""
          //   }

          return this.assignmentService!.GetAssignment({
            assignedDate: this.dateFilter,
            state: this.stateFilter,
            keySearch: this.searchFilter,
            orderProperty: this.sort.active == "created" ? 'UpdatedDate' : this.sort.active,
            desc: this.sort.direction !== "desc" ? true : false,
            page: this.paginator.pageIndex + 1,
            limit: 5,
          })
            .pipe(catchError(() => of(null)));
        }),
        map(data => {
          if (data === null) {
            return [];
          }
          console.log(data)
          this.resultsLength = data.totalItems;
          
          return data.items;
        })
      ).subscribe(data => this.data = data);
  }

  openDialogViewDetailInfo(datasource: any): void {

    if (this.isOpenModalDetail) {
      let keyDisplayItem = ["Asset Code", "Asset Name", "Specification", "Assigned to", "Assigned by", "Assigned Date", "State","Note"];

      let valueDisplayItem = {
        assetCode: datasource.assetCode,
        assetName: datasource.assetName,
        assetSpecification: datasource.assetSpecification,
        assignedTo: datasource.assignedTo,
        assignedBy: datasource.assignedBy,
        assignedDate: datasource.assignedDate,
        state: this.statePipe.transform(datasource.state),
        note: datasource.note
      }
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
    if (res === "XcircleBtnIsClicked") {
      this.DisableAssignment(this.currentId);
      this.xcirclecomponent.closeDialog();
    }
    if (res === "ArrowcircleBtnIsClicked") {
      this.RequestForReturning({ Id: this.currentId, UserId: localStorage.getItem('userId') ?? '' });
      this.arrowcirclecomponent.closeDialog();
    }
    this.LoadData();
    console.log("Emit event click yes " + res + " " + this.currentId)
  }
  //-----event binding from template
  onBtnInRowClicked(assignmentId: string) {
    //Prevent popup detail info before turn on popup of button
    this.isOpenModalDetail = false;
    //Update id object
    this.UpdateAssignmentId(assignmentId)
  }

  OnClickEditAssignment(assignmentId: string) {
    this.router.navigate([`assignment/EditAssignment/${assignmentId}`])
  }
  //--------------//
  RequestForReturning(assignment: any): void {
    this.assignmentService.RequestReturningAssignment(assignment)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.error instanceof Error) {
            console.error('An error occurred:', error.error.message);
          } else {
            console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
          }
          return EMPTY;
        })).subscribe(data => console.log(data));
  }
  DisableAssignment(assignmentId: string): void {
    this.assignmentService.DisableAssignment(assignmentId)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.error instanceof Error) {
            console.error('An error occurred:', error.error.message);
          } else {
            console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
          }
          return EMPTY;
        })).subscribe(data => console.log(data));
  }
  UpdateAssignmentId(assignmentId: string) {
    this.currentId = assignmentId;
  }

  UpdateIsOpenModalDetail() {
    this.isOpenModalDetail = true;
  }
  TransFormState(state :string) : string{
    return this.statePipe.transform(state)
  }
}
