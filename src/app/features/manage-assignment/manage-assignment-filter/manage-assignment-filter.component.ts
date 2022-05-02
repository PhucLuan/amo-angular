import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { AssignmentService } from 'src/app/core/services/assignment/assignment.service';

@Component({
  selector: 'app-manage-assignment-filter',
  templateUrl: './manage-assignment-filter.component.html',
  styleUrls: ['./manage-assignment-filter.component.css']
})
export class ManageAssignmentFilterComponent implements OnInit {

  public StateSelect = new FormControl();
  public CategorySelect = new FormControl();

  constructor(private assignmentService: AssignmentService, private router: Router) { }

  //public categoryList: any
  public stateList: any
  public stateSlectedString! : string
  public searchKey$ = new BehaviorSubject<any>('');
  public assignedDateSelected$ = new BehaviorSubject<any>('');

  ngOnInit(): void {
    this.assignmentService.GetFilter()
      .subscribe(
        res => {
          this.stateList = res.stateList
        }
      )
  }
  ngAfterViewInit(): void {

    this.StateSelect.valueChanges
    .pipe(
      map(data => {
        return data.join(" ")
      })
    )
    .subscribe(res => this.assignmentService.stateSelected$.next({type : 'state', value : res}))

    // this.CategorySelect.valueChanges
    // .pipe(
    //   map(data => {
    //     return data.join(" ")
    //   })
    // )
    // .subscribe(res => this.assetService.categorySelected$.next({type : 'category', value : res}))

    this.searchKey$.subscribe(res => this.assignmentService.searchKey$.next({type : 'searchKey', value : res}))
    this.assignedDateSelected$.subscribe(res => this.assignmentService.searchKey$.next({type : 'assignedDate', value : res}))
  }
  onClickCreateAsset(){
    this.router.navigate(['/assignment/CreateAssignment'])
  }
}
