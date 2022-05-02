import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, } from '@angular/router';
import { AssetService } from 'src/app/core/services/assetservice/asset.service';

@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
  styleUrls: ['./asset-form.component.css']
})

export class AssetFormComponent implements OnInit {

  //title = 'forms-cross-field-validation';
  public assetForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    specification: ['', Validators.required],
    categoryId: ['', Validators.required],
    installedDate: ['', Validators.required],
    state: ['', Validators.required],
  });

  states = [
    { id: '0', value: 'Available' },
    { id: '1', value: 'Not available' },
  ];
  public CategorySelect = new FormControl();
  public categoryList: any;
  public assetId: string = "";
  public isAddMode: boolean = true;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private assetService: AssetService, private router: Router) { }

  ngOnInit(): void {
    this.assetService.GetFilter()
      .subscribe(
        res => {
          this.categoryList = res.categoryList;
          //this.InitialValue();
          //this.stateList = res.stateList
          this.GetAsset();
        }
      )


  }

  GetAsset(): void {
    this.assetId = this.route.snapshot.paramMap.get('id') ?? "";
    if (!(this.assetId == null || this.assetId == undefined || this.assetId == "")) {
      this.isAddMode = false;
      this.assetForm.get('categoryId')?.disable({ onlySelf: true });
      this.InitialValue(this.assetId);
    }
  }
  onSubmit() {
    if (this.isAddMode) {
      this.assetService.CreateAsset(this.assetForm.value)
        .subscribe(
          () => {
            this.router.navigate(['/asset'])
          }
        )
    }
    else {
      var asset = { ...{ id: this.assetId }, ...this.assetForm.getRawValue() };
    
      this.assetService.EditAsset(asset)
        .subscribe(
          () => {
            this.router.navigate(['/asset'])
          }
        )
    }

  }
  FormatDate(date: any) {
    return date.split("/").reverse().join("-");
  }
  InitialValue(assetid: string): void {

    this.assetService.GetAssetById(assetid)
      .subscribe(
        x => {
          this.assetForm.patchValue({
            name: x.name,
            specification: x.specification,
            categoryId: x.categoryId,
            installedDate: this.FormatDate(x.installedDate),
            state: x.state
          })
        }
      )
  }
  OnCancelClick(){
    this.router.navigate(['/asset'])
  }
}
