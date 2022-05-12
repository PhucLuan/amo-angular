import { HistoryAssignment } from './../../../core/models/historyassignment';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, catchError, debounceTime, distinctUntilChanged, map, merge, Observable, of, startWith, switchMap } from 'rxjs';
import { AssetItem } from 'src/app/core/models/asset-item';
import { AssetService } from 'src/app/core/services/assetservice/asset.service';
import { AssetModalComponent } from '../asset-modal/asset-modal.component';
import { AssetDeleteModalComponent } from '../asset-delete-modal/asset-delete-modal.component';
import { Router } from '@angular/router';

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
    'state',
    'action'
  ];
  data: AssetItem[] = [];
  historyAssignment: HistoryAssignment[] = [];
  isOpenModalDetail: boolean = true;

  private currentId: string = '';

  @ViewChild(MatSort) sort!: MatSort;
  resultsLength = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  stateFilter = "";
  categoryFilter = "";
  searchFilter = "";
  constructor(private assetService: AssetService, public dialog: MatDialog, private router: Router) { }

  ngAfterViewInit(): void {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.assetService.searchKey$.subscribe(() => this.paginator.pageIndex = 0);
    this.assetService.stateSelected$.subscribe(() => this.paginator.pageIndex = 0);
    this.assetService.categorySelected$.subscribe(() => this.paginator.pageIndex = 0);
    this.LoadData();
  }

  LoadData(): void {
    merge(
      this.sort.sortChange,
      this.assetService.searchKey$.pipe(debounceTime(1000), distinctUntilChanged()),
      this.paginator.page,
      this.assetService.stateSelected$,
      this.assetService.categorySelected$)
      .pipe(
        startWith({}),
        switchMap((searchTerm) => {
          if (searchTerm.type == 'category') {
            this.categoryFilter = searchTerm.value;
          }

          if (searchTerm.type == 'state') {
            this.stateFilter = searchTerm.value;
          }

          if (searchTerm && typeof searchTerm == 'string') {
            this.searchFilter = searchTerm.toString();

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

      const Params = { assetid: datasource.id }
      this.assetService.GetHistoryAssignment(Params)
        .subscribe(res => {
          this.historyAssignment = res;
          console.log(this.historyAssignment)
          const dialogRef = this.dialog.open(AssetModalComponent, {
            panelClass: 'asset-detail-modalbox',
            data: {
              title: "Detailed Asset Information",
              keys: keyDisplayItem,
              values: Object.values(valueDisplayItem),
              history: this.historyAssignment
            },
          });
        })
    }
  }

  //-----event binding from template
  onBtnInRowClicked(assetId: string) {
    //Prevent popup detail info before turn on popup of button
    this.isOpenModalDetail = false;
    //Update id object
    this.UpdateAssetId(assetId)
  }

  OnClickDeleteAsset(assetId: string) {
    this.onBtnInRowClicked(assetId)
    this.assetService.IsAssetExitInAssignmentAsync(assetId)
      .subscribe(
        x => {

          if (x == true) {
            const dialogRef = this.dialog.open(AssetDeleteModalComponent, {
              panelClass: 'custom-modalbox',
              data: {
                title: "Cannot Delete Asset",
                isExited: true
              },
            });

            dialogRef.componentInstance.dialogRef.afterClosed()
              .subscribe(() => {
                this.UpdateIsOpenModalDetail()
              })
          } else {
            const dialogRef = this.dialog.open(AssetDeleteModalComponent, {
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
              this.assetService.DeleteAsset(this.currentId).subscribe(
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
  OnClickEditAsset(assetId: string) {
    this.router.navigate([`asset/EditAsset/${assetId}`])
  }
  //--------------//
  UpdateAssetId(asset: string) {
    this.currentId = asset;
  }

  UpdateIsOpenModalDetail() {
    this.isOpenModalDetail = true;
  }
}
