import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, catchError, debounceTime, distinctUntilChanged, map, merge, of, startWith, switchMap } from 'rxjs';
import { AssignmentService } from 'src/app/core/services/assignment/assignment.service';

@Component({
  selector: 'app-user-popup',
  templateUrl: './user-popup.component.html',
  styleUrls: ['./user-popup.component.css']
})
export class UserPopupComponent implements OnInit {
  displayedColumns: string[] = ['radio', 'StaffCode','UserName', 'FullName', 'Type'];
  public selectedUser!: any;
  public listUser!: any[];
  public isAddMode: boolean = true;
  
  @ViewChild(MatSort) sort!: MatSort;
  term$ = new BehaviorSubject<string>('');
  
  constructor(
    public dialogRef: MatDialogRef<UserPopupComponent>,
    private assignmentService: AssignmentService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.LoadData()
  }

  onSaveClick(): void {
    if (this.selectedUser !== undefined && this.selectedUser !== null) {
      const user = this.listUser.filter(x => x.id == this.selectedUser)[0];
      this.assignmentService.user$.next(user);
      this.dialogRef.close();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  LoadData(): void {
    merge(
      this.sort.sortChange,
      this.term$.pipe(debounceTime(1000), distinctUntilChanged()),
    )
      .pipe(
        startWith({}),
        switchMap((searchTerm) => {
          return this.assignmentService!.FindUserInLocation({
            search: searchTerm && typeof searchTerm == 'string' ? searchTerm.toString() : '',
            propertyName: this.sort.active == "created" ? 'StaffCode' : this.sort.active,
            desc: this.sort.direction !== "desc" ? true : false,
            page: 1,
            limit: 5,
            name:"",
            type:""
          })
            .pipe(catchError(() => of(null)));
        }),
        map(data => {
          
          if (data === null) {
            return [];
          }
          return data.items;
        })
      ).subscribe(data => {
        this.listUser = data
      });
  }
}
