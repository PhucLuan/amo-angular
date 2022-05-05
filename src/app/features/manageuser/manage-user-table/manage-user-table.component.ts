import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { catchError, debounceTime, distinctUntilChanged, map, merge, of, startWith, switchMap } from 'rxjs';
import { UserService } from 'src/app/core/services/manageuser/user.service';

@Component({
  selector: 'app-manage-user-table',
  templateUrl: './manage-user-table.component.html',
  styleUrls: ['./manage-user-table.component.css']
})
export class ManageUserTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['StaffCode', 'FullName' , 'UserName','JoinedDate', 'Type','action'];

  data: any;

  isOpenModalDetail: boolean = true;

  private currentId: string = '';

  /*sort, search, paging*/
  @ViewChild(MatSort) sort!: MatSort;
  resultsLength = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  typeFilter = "";
  searchFilter = "";
  constructor(
    private userService: UserService, 
    public dialog: MatDialog, 
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    //If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.userService.searchKey$.subscribe(() => this.paginator.pageIndex = 0);
    this.userService.typeSelected$.subscribe(() => this.paginator.pageIndex = 0);
    this.LoadData();
  }
  LoadData(): void {
    merge(
      this.sort.sortChange,
      this.userService.searchKey$.pipe(debounceTime(1000), distinctUntilChanged()),
      this.userService.typeSelected$.pipe(debounceTime(1000), distinctUntilChanged()),
      this.paginator.page,
      )
      .pipe(
        startWith({}),
        switchMap((searchTerm) => {
          
          if (searchTerm.type == 'searchKey') {
            this.searchFilter = searchTerm.value;
          }
          if (searchTerm.type == 'type') {
            this.typeFilter = searchTerm.value;
          }

          return this.userService!.FindUserInLocation({
            search: this.searchFilter,
            propertyName: this.sort.active == "created" ? 'LastModified' : this.sort.active,
            desc: this.sort.direction !== "desc" ? true : false,
            page: this.paginator.pageIndex + 1,
            limit: 5,
            name:"",
            type:this.typeFilter
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
  
  OnClickEditUser(userId : any){
    this.router.navigate([`user/EditUser/${userId}`])
  }
}
