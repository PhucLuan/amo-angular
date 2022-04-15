import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, catchError, debounceTime, distinctUntilChanged, merge, of, startWith, switchMap } from 'rxjs';
import { AssignmentItem } from 'src/app/core/models/assignment-item';
import { HomeService } from 'src/app/core/services/homeservice/home.service';

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
    'state',
  ];
  data: AssignmentItem[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  term$ = new BehaviorSubject<string>('');
  resultsLength = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private appService: HomeService) {}

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(
      this.sort.sortChange,
      this.term$.pipe(debounceTime(1000), distinctUntilChanged()),
      this.paginator.page
    )
      .pipe(
        startWith({}),
        switchMap((searchTerm) => {
          console.log(this.sort.active);
          console.log(this.sort.direction);
          console.log(this.paginator.pageIndex);
          return (
            this.appService!.getData('d45119c7-6e65-47db-b947-bc0280e88394')
              // searchTerm && typeof searchTerm == 'string'
              //   ? searchTerm.toString()
              //   : 'repo:angular/components'
              //()
              .pipe(catchError(() => of(null)))
          );
        })
        // map((data) => {
        //   if (data === null) {
        //     return [];
        //   }

        //   this.resultsLength = data.totalPages;
        //   return data.items;
        // })
      )
      .subscribe((data : any ) => (this.data = data));
  }
  openSelected(datasource : any) {
    console.log(datasource);
  }
}

