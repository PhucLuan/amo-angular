import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { catchError, debounceTime, distinctUntilChanged, map, merge, of, startWith, switchMap } from 'rxjs';
import { StatePipe } from 'src/app/core/pipe/state.pipe';
import { RequestReturningService } from 'src/app/core/services/requestreturning/request-returning.service';
import { CancelbtnComponent } from 'src/app/shared/button/cancelbtn/cancelbtn.component';
import { CheckbtnComponent } from 'src/app/shared/button/checkbtn/checkbtn.component';
import { XcirclebtnComponent } from 'src/app/shared/button/xcirclebtn/xcirclebtn.component';

@Component({
  selector: 'app-manage-request-table',
  templateUrl: './manage-request-table.component.html',
  styleUrls: ['./manage-request-table.component.css']
})
export class ManageRequestTableComponent implements OnInit {
  displayedColumns: string[] = [
    'number',
    'assetCode',
    'assetName',
    'requestedBy',
    'assignedDate',
    'acceptedBy',
    'returnDate',
    'state',
    'action'
  ];
  data: any;
  /*sort, search, paging*/
  @ViewChild(MatSort) sort!: MatSort;
  resultsLength = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  stateFilter = "";
  dateFilter = "";
  searchFilter = "";

  private currentId: string = '';

  @ViewChild(CheckbtnComponent) private checkcomponent!: CheckbtnComponent;
  @ViewChild(CancelbtnComponent) private cancelcomponent!: CancelbtnComponent;
  constructor(
    private requestReturningService: RequestReturningService,
    public dialog: MatDialog,
    private router: Router,
    private statePipe: StatePipe
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.requestReturningService.searchKey$.subscribe(() => this.paginator.pageIndex = 0);
    this.requestReturningService.stateSelected$.subscribe(() => this.paginator.pageIndex = 0);
    this.requestReturningService.returnDateSelected$.subscribe(() => this.paginator.pageIndex = 0);
    this.LoadData();
  }

  LoadData(): void {
    merge(
      this.sort.sortChange,
      this.requestReturningService.searchKey$.pipe(debounceTime(1000), distinctUntilChanged()),
      this.requestReturningService.returnDateSelected$.pipe(debounceTime(1000), distinctUntilChanged()),
      this.paginator.page,
      this.requestReturningService.stateSelected$
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
          if (searchTerm.type == 'returnedDate') {
            this.dateFilter = searchTerm.value;
          }

          return this.requestReturningService!.GetRequestReturning({
            state: this.stateFilter,
            returnDate: this.dateFilter,
            orderProperty: this.sort.active == "created" ? 'returnDate' : this.sort.active,
            desc: this.sort.direction !== "desc" ? false : true,
            page: this.paginator.pageIndex + 1,
            limit: 5,
            keySearch: this.searchFilter,
            adminId: "00000000-0000-0000-0000-000000000000"
          })
            .pipe(catchError(() => of(null)));
        }),
        map(data => {
          if (data === null) {
            return [];
          }
         
          this.resultsLength = data.totalItems;

          return data.items;
        })
      ).subscribe(data => this.data = data);
  }
//-----event binding from template
onBtnInRowClicked(requestId: string) {
  //Update id object
  this.UpdateRequestId(requestId)
}
  onClickYes(res: string) {
    if (res === "CancelBtnIsClicked") {
      //this.DisableAssignment(this.currentId);
      this.requestReturningService.CancelRequestReturning(this.currentId).subscribe(x => console.log(x))
      //console.log("CancelBtnIsClicked",this.currentId)
      this.cancelcomponent.closeDialog();
    }
    if (res === "CheckBtnIsClicked") {
      this.requestReturningService.AcceptRequestReturning(this.currentId).subscribe(x => console.log(x));
      console.log(this.currentId)
      //this.RequestForReturning({ Id: this.currentId, UserId: localStorage.getItem('userId') ?? '' });
      this.checkcomponent.closeDialog();
    }
    this.LoadData();
    console.log("Emit event click yes " + res + " " + this.currentId)
  }
  UpdateRequestId(requestId: string) {
    this.currentId = requestId;
  }
  TransFormState(state :string) : string{
    return this.statePipe.transform(state)
  }
}
