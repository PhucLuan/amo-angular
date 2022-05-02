import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, catchError, debounceTime, distinctUntilChanged, map, merge, of, startWith, switchMap } from 'rxjs';
import { AssignmentService } from 'src/app/core/services/assignment/assignment.service';
import { AssetModalComponent } from '../../manageasset/asset-modal/asset-modal.component';

@Component({
  selector: 'app-asset-popup',
  templateUrl: './asset-popup.component.html',
  styleUrls: ['./asset-popup.component.css']
})
export class AssetPopupComponent implements OnInit {

  displayedColumns: string[] = ['radio', 'name', 'code', 'categoryName'];
  public selectedAsset!: any;
  public listAsset!: any[];
  public assetId!: string;
  public isAddMode: boolean = true;
  @ViewChild(MatSort) sort!: MatSort;
  term$ = new BehaviorSubject<string>('');

  constructor(
    public dialogRef: MatDialogRef<AssetModalComponent>,
    private assignmentService: AssignmentService,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.GetAsset()
  }
  ngAfterViewInit(): void {
    this.LoadData()
  }
  onSaveClick(): void {
    if (this.selectedAsset !== undefined && this.selectedAsset !== null) {
      const asset = this.listAsset.filter(x => x.id == this.selectedAsset)[0];
      this.assignmentService.asset$.next(asset);
      this.dialogRef.close();
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  GetAsset(): void {
    this.assetId = this.route.snapshot.paramMap.get('id') ?? "";
    if (!(this.assetId == null || this.assetId == undefined || this.assetId == "")) {
      this.isAddMode = false;
      this.selectedAsset = this.assetId;
      //this.assetForm.get('categoryId')?.disable({ onlySelf: true });
      //this.InitialValue(this.assetId);
    }
  }
  LoadData(): void {
    merge(
      this.sort.sortChange,
      this.term$.pipe(debounceTime(1000), distinctUntilChanged()),
    )
      .pipe(
        startWith({}),
        switchMap((searchTerm) => {
          return this.assignmentService!.FindAssetAvailable({
            KeySearch: searchTerm && typeof searchTerm == 'string' ? searchTerm.toString() : '',
            OrderProperty: this.sort.active == "created" ? 'code' : this.sort.active,
            desc: this.sort.direction !== "desc" ? true : false,
            Page: 1,
            Limit: 5,
          })
            .pipe(catchError(() => of(null)));
        }),
        map(data => {
          
          if (data === null) {
            return [];
          }
          return data.items;
        })
      ).subscribe(data => 
        {this.listAsset = data
          this.selectedAsset = this.assetId
          console.log(this.selectedAsset)
          //this.selectedAsset = "1e37c9d1-c0df-4dda-61ef-08da2b76ec53"
        });
  }

}
