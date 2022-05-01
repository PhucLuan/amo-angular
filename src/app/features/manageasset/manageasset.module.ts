import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageassetRoutingModule } from './manageasset-routing.module';
import { AssetTableComponent } from './asset-table/asset-table.component';
import { ManageassetComponent } from './manageasset.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { AssetFilterComponent } from './asset-filter/asset-filter.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssetModalComponent } from './asset-modal/asset-modal.component';
import { AssetDeleteModalComponent } from './asset-delete-modal/asset-delete-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { AssetFormComponent } from './asset-form/asset-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [
    ManageassetComponent,
    AssetTableComponent,
    AssetFilterComponent,
    AssetModalComponent,
    AssetDeleteModalComponent,
    AssetFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ManageassetRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ManageassetModule { }
