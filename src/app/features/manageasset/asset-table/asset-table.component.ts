import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, catchError, debounceTime, distinctUntilChanged, map, merge, of, startWith, switchMap } from 'rxjs';
import { AssetItem } from 'src/app/core/models/asset-item';
import { AssetService } from 'src/app/core/services/assetservice/asset.service';
import { AssetModalComponent } from '../asset-modal/asset-modal.component';

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
  stateFilter = "";
  categoryFilter = "";
  searchFilter = "";
  constructor(private assetService: AssetService,public dialog: MatDialog) { }

  ngAfterViewInit(): void {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.term$.subscribe(() => this.paginator.pageIndex = 0);
    this.assetService.stateSelected$.subscribe(() => this.paginator.pageIndex = 0);
    this.assetService.categorySelected$.subscribe(() => this.paginator.pageIndex = 0);
    this.LoadData();
  }

  LoadData(): void{
    merge(
      this.sort.sortChange, 
      this.term$.pipe(debounceTime(1000), distinctUntilChanged()), 
      this.paginator.page, 
      this.assetService.stateSelected$,
      this.assetService.categorySelected$)
      .pipe(
        startWith({}),
        switchMap((searchTerm) => {
          console.log(searchTerm.toString())
          if (searchTerm.type == 'category') {
            this.categoryFilter = searchTerm.value;
          }

          if (searchTerm.type == 'state') {
            this.stateFilter = searchTerm.value;
          }

          if (searchTerm && typeof searchTerm == 'string') {
            this.searchFilter =  searchTerm.toString();
            
          }
          else 
            //keep value of search string when change filter
            if (!(searchTerm.type == 'state' || searchTerm.type == 'category' || typeof searchTerm == 'object')) {
              this.searchFilter = ""
            }
            
          return this.assetService!.GetAsset({
            category: this.categoryFilter,
            state: this.stateFilter,
            keySearch: this.searchFilter,
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

  openDialogViewDetailInfo(datasource: any): void {
    
    if (this.isOpenModalDetail) {
      let keyDisplayItem = ["Asset Code", "Asset Name", "Category", "Installed Date", "State", "Location", "Specification"];

      let valueDisplayItem = {
        code: datasource.code,
        name: datasource.name,
        categoryName: datasource.categoryName,
        installedDate: datasource.installedDate,
        state: datasource.state,
        location: datasource.location,
        specification: datasource.specification,
      }
      console.log(datasource)
      const dialogRef = this.dialog.open(AssetModalComponent, {

        data: {
          title: "Detailed Assignment Information",
          keys: keyDisplayItem,
          values: Object.values(valueDisplayItem)
        },
      });
    }
  }
}
