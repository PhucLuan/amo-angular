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

  title = 'forms-cross-field-validation';
  profileForm!: FormGroup;

  rooms = [
    { text: 'room 1', value: 'room-1' },
    { text: 'room 2', value: 'room-2' },
    { text: 'room 3', value: 'room-3' },
  ];
  public CategorySelect = new FormControl();
  public categoryList: any
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private assetService: AssetService) { }

  ngOnInit(): void {
    this.assetService.GetFilter()
      .subscribe(
        res => {
          this.categoryList = res.categoryList;
          //this.stateList = res.stateList
        }
      )
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      category: ['', Validators.required],
      installDate: ['', Validators.required],
    });
    this.GetAsset();
  }

  GetAsset(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
  }
  onSubmit() {
    console.log(this.profileForm.value);
  }
}
