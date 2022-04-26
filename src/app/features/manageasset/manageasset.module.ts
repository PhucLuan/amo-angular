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


@NgModule({
  declarations: [
    ManageassetComponent,
    AssetTableComponent,
    AssetFilterComponent
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
    MatSelectModule
  ]
})
export class ManageassetModule { }
