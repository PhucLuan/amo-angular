import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, map } from 'rxjs';
import { RequestReturningService } from 'src/app/core/services/requestreturning/request-returning.service';

@Component({
  selector: 'app-manage-request-filter',
  templateUrl: './manage-request-filter.component.html',
  styleUrls: ['./manage-request-filter.component.css']
})
export class ManageRequestFilterComponent implements OnInit {

  public StateSelect = new FormControl();
  
  public stateList: any
  public stateSlectedString!: string
  public searchKey$ = new BehaviorSubject<any>('');
  public returnedDateSelected$ = new BehaviorSubject<any>('');

  constructor(private requestReturningService: RequestReturningService) { }

  ngOnInit(): void {
    this.stateList = [
      {
        id: '7',
        name: 'Completed'
      },
      {
        id: '8',
        name: 'Waiting For Returning'
      }
    ]
  }

  ngAfterViewInit(): void {

    this.StateSelect.valueChanges
    .pipe(
      map(data => {
        return data.join(" ")
      })
    )
    .subscribe(res => this.requestReturningService.stateSelected$.next({type : 'state', value : res}))

    this.searchKey$.subscribe(res => this.requestReturningService.searchKey$.next({type : 'searchKey', value : res}))
    this.returnedDateSelected$.subscribe(res => this.requestReturningService.searchKey$.next({type : 'returnedDate', value : res}))
  }

}
