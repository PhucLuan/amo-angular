import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { catchError, debounceTime, distinctUntilChanged, map, merge, of, startWith, switchMap } from 'rxjs';
import { UserService } from 'src/app/core/services/manageuser/user.service';
import { ModalDetailInfoComponent } from 'src/app/shared/modal-detail-info/modal-detail-info.component';
import { UserDeleteModalComponent } from '../user-delete-modal/user-delete-modal.component';

@Component({
  selector: 'app-manage-user-table',
  templateUrl: './manage-user-table.component.html',
  styleUrls: ['./manage-user-table.component.css']
})
export class ManageUserTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['StaffCode', 'FullName', 'UserName', 'JoinedDate', 'Type', 'action'];

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
            name: "",
            type: this.typeFilter
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

  OnClickEditUser(userId: any) {
    this.router.navigate([`user/EditUser/${userId}`])
  }

  openDialogViewDetailInfo(datasource: any): void {

    if (this.isOpenModalDetail) {
      let keyDisplayItem = ["Staff Code", "Full Name", "User Name", "Date Of Birth", "Gender", "Joined Date", "Type", "Location"];

      let valueDisplayItem = {
        codeStaff: datasource.codeStaff ? datasource.codeStaff : '__',
        fullName: datasource.fullName,
        userName: datasource.userName,
        dateOfBirth: datasource.dateOfBirth,
        gender: datasource.gender,
        joinedDate: datasource.joinedDate,
        type: datasource.type,
        location: datasource.location,
      }
      const dialogRef = this.dialog.open(ModalDetailInfoComponent, {
        panelClass: 'user-detail-modalbox',
        data: {
          title: "Detailed User Information",
          keys: keyDisplayItem,
          values: Object.values(valueDisplayItem)
        },
      });
    }
  }
  //-----event binding from template
  onBtnInRowClicked(userId: string) {
    //Prevent popup detail info before turn on popup of button
    this.isOpenModalDetail = false;
    //Update id object
    this.UpdateUserId(userId)
  }
  OnClickDeleteUser(userId: string) {
    this.onBtnInRowClicked(userId)
    this.userService.CheckCanNotDisableUser(userId)
      .subscribe(
        x => {

          if (x == true) {
            const dialogRef = this.dialog.open(UserDeleteModalComponent, {
              panelClass: 'custom-modalbox',
              data: {
                title: "Cannot Delete User",
                isExited: true
              },
            });

            dialogRef.componentInstance.dialogRef.afterClosed()
              .subscribe(() => {
                this.UpdateIsOpenModalDetail()
              })
          } else {
            const dialogRef = this.dialog.open(UserDeleteModalComponent, {
              panelClass: 'custom-modalbox',
              data: {
                title: "Are you sure?",
                message: "Do you want to delete this asset?",
                confirmBtn: "Delete",
                cancelBtn: "Cancel",
                isExited: false
              },
            });

            dialogRef.componentInstance.ClickYes$.subscribe((res) => {
              console.log("delete")
              this.userService.DeleteUser(this.currentId).subscribe(
                x => console.log(x)
              )
              this.dialog.closeAll();
              this.LoadData();
            });

            dialogRef.componentInstance.dialogRef.afterClosed()
              .subscribe(() => {
                this.UpdateIsOpenModalDetail()
              })
          }
        }
      )
  }

  //--------------//
  UpdateUserId(userId: string) {
    this.currentId = userId;
  }

  UpdateIsOpenModalDetail() {
    this.isOpenModalDetail = true;
  }
}
