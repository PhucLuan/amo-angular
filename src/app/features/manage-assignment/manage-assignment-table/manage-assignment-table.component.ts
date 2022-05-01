import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { catchError, debounceTime, distinctUntilChanged, map, merge, of, startWith, switchMap } from 'rxjs';
import { AssignmentItem } from 'src/app/core/models/assignment-item';
import { AssignmentService } from 'src/app/core/services/assignment/assignment.service';

@Component({
  selector: 'app-manage-assignment-table',
  templateUrl: './manage-assignment-table.component.html',
  styleUrls: ['./manage-assignment-table.component.css']
})
export class ManageAssignmentTableComponent implements AfterViewInit {

  displayedColumns: string[] = [
    'assetCode',
    'assetName',
    'assignedTo',
    'assignedBy',
    'assignedDate',
    'stateName'
  ];
  data: AssignmentItem[] = [];
  isOpenModalDetail: boolean = true;

  private currentId: string = '';

  @ViewChild(MatSort) sort!: MatSort;
  resultsLength = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  stateFilter = "";
  categoryFilter = "";
  searchFilter = "";
  constructor(
    private assignmentService: AssignmentService, 
    public dialog: MatDialog, 
    private router: Router) { }

  ngAfterViewInit(): void {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.assignmentService.searchKey$.subscribe(() => this.paginator.pageIndex = 0);
    this.assignmentService.stateSelected$.subscribe(() => this.paginator.pageIndex = 0);
    //this.assignmentService.categorySelected$.subscribe(() => this.paginator.pageIndex = 0);
    this.LoadData();
  }

  LoadData(): void {
    merge(
      this.sort.sortChange,
      this.assignmentService.searchKey$.pipe(debounceTime(1000), distinctUntilChanged()),
      this.paginator.page,
      this.assignmentService.stateSelected$,
      //this.assignmentService.categorySelected$
      )
      .pipe(
        startWith({}),
        switchMap((searchTerm) => {
          // if (searchTerm.type == 'category') {
          //   this.categoryFilter = searchTerm.value;
          // }

          if (searchTerm.type == 'state') {
            this.stateFilter = searchTerm.value;
          }

          if (searchTerm && typeof searchTerm == 'string') {
            this.searchFilter = searchTerm.toString();

          }
          else
            //keep value of search string when change filter
            if (!(searchTerm.type == 'state' || typeof searchTerm == 'object')) {
              this.searchFilter = ""
            }

          return this.assignmentService!.GetAssignment({
            assignedDate: null,
            state: this.stateFilter,
            keySearch: this.searchFilter,
            orderProperty: this.sort.active == "created" ? 'UpdatedDate' : this.sort.active,
            desc: false,
            page: this.paginator.pageIndex + 1,
            limit: 5,
          })
            .pipe(catchError(() => of(null)));
        }),
        map(data => {
          if (data === null) {
            return [];
          }

          this.resultsLength = data.body.totalItems;
          console.log(data)
          return data.body.items;
        })
      ).subscribe(data => this.data = data);
  }

  // openDialogViewDetailInfo(datasource: any): void {

  //   if (this.isOpenModalDetail) {
  //     let keyDisplayItem = ["Assignment Code", "Assignment Name", "Category", "Installed Date", "State", "Location", "Specification"];

  //     let valueDisplayItem = {
  //       code: datasource.code,
  //       name: datasource.name,
  //       categoryName: datasource.categoryName,
  //       installedDate: datasource.installedDate,
  //       state: datasource.state,
  //       location: datasource.location,
  //       specification: datasource.specification,
  //     }

  //     const Params = { assignmentid: datasource.id }
  //     this.assignmentService.GetHistoryAssignment(Params)
  //       .subscribe(res => {
  //         this.historyAssignment = res;
  //         console.log(this.historyAssignment)
  //         const dialogRef = this.dialog.open(AssignmentModalComponent, {

  //           data: {
  //             title: "Detailed Assignment Information",
  //             keys: keyDisplayItem,
  //             values: Object.values(valueDisplayItem),
  //             //history: this.historyAssignment
  //           },
  //         });
  //       })
  //   }
  // }

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
  UpdateAssignmentId(assignment: string) {
    this.currentId = assignment;
  }

  UpdateIsOpenModalDetail() {
    this.isOpenModalDetail = true;
  }

}
