import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, catchError, debounceTime, distinctUntilChanged, map, merge, of, startWith, switchMap } from 'rxjs';
import { AssetItem } from 'src/app/core/models/asset-item';
import { AssetService } from 'src/app/core/services/assetservice/asset.service';

@Component({
  selector: 'app-asset-table',
  templateUrl: './asset-table.component.html',
  styleUrls: ['./asset-table.component.css']
})
export class AssetTableComponent implements AfterViewInit {

  displayedColumns: string[] = [
    'code',
    'name',
    'categoryName',
    'state'
  ];
  data: AssetItem[] = [];

  isOpenModalDetail: boolean = true;

  @ViewChild(MatSort) sort!: MatSort;
  term$ = new BehaviorSubject<string>('');
  resultsLength = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private assetService: AssetService,) { }

  ngAfterViewInit(): void {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.term$.pipe(debounceTime(1000), distinctUntilChanged()), this.paginator.page)
      .pipe(
        startWith({}),
        switchMap((searchTerm) => {
          return this.assetService!.GetAsset({
            categoryId: "",
            state: "",
            keySearch: (searchTerm && typeof searchTerm == 'string') ? searchTerm.toString() : '',
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

          this.resultsLength = data.totalItems;
          return data.items;
        })
      ).subscribe(data => this.data = data);
  }

}
