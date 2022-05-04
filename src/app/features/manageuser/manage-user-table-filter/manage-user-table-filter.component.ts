import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { UserService } from 'src/app/core/services/manageuser/user.service';

@Component({
  selector: 'app-manage-user-table-filter',
  templateUrl: './manage-user-table-filter.component.html',
  styleUrls: ['./manage-user-table-filter.component.css']
})
export class ManageUserTableFilterComponent implements OnInit {

  public TypeSelect = new FormControl();
  //public CategorySelect = new FormControl();

  constructor(private userService: UserService, private router: Router) { }

  //public categoryList: any
  public typeList: any
  public typeSlectedString!: string
  public searchKey$ = new BehaviorSubject<any>('');

  ngOnInit(): void {
    this.typeList = [
      {
        id: 'Staff',
        name: 'Staff'
      },
      {
        id: 'Admin',
        name: 'Admin',
      }
    ]

  }
  ngAfterViewInit(): void {

    this.TypeSelect.valueChanges
      .pipe(
        map(data => {
          return data.join(" ")
        })
      )
      .subscribe(res => this.userService.typeSelected$.next({ type: 'type', value: res }))

    this.searchKey$.subscribe(res => this.userService.searchKey$.next({ type: 'searchKey', value: res }))
  }
  onClickCreateUser() {
    // this.assignmentService.asset$.next({});
    // this.assignmentService.user$.next({});
    this.router.navigate(['/user/CreateUser'])
  }

}
