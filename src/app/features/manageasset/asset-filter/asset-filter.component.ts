import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';
import { BehaviorSubject, debounceTime, distinctUntilChanged, map, merge, Observable, startWith, switchMap } from 'rxjs';
import { AssetService } from 'src/app/core/services/assetservice/asset.service';

@Component({
  selector: 'app-asset-filter',
  templateUrl: './asset-filter.component.html',
  styleUrls: ['./asset-filter.component.css']
})

export class AssetFilterComponent implements OnInit {

  public StateSelect = new FormControl();
  public CategorySelect = new FormControl();

  constructor(private assetService: AssetService, private router: Router) { }

  public categoryList: any
  public stateList: any
  public stateSlectedString! : string
  public searchKey$ = new BehaviorSubject<string>('');

  ngOnInit(): void {
    this.assetService.GetFilter()
      .subscribe(
        res => {
          this.categoryList = res.categoryList;
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
    .subscribe(res => this.assetService.stateSelected$.next({type : 'state', value : res}))

    this.CategorySelect.valueChanges
    .pipe(
      map(data => {
        return data.join(" ")
      })
    )
    .subscribe(res => this.assetService.categorySelected$.next({type : 'category', value : res}))

    this.searchKey$.subscribe(res => this.assetService.searchKey$.next(res))
  }

  onClickCreateAsset(){
    this.router.navigate(['/asset/CreateAsset'])
  }
}
