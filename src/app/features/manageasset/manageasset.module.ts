import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageassetRoutingModule } from './manageasset-routing.module';
import { AssetTableComponent } from './asset-table/asset-table.component';
import { ManageassetComponent } from './manageasset.component';
import { AssetFilterComponent } from './asset-filter/asset-filter.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssetModalComponent } from './asset-modal/asset-modal.component';
import { AssetDeleteModalComponent } from './asset-delete-modal/asset-delete-modal.component';
import { AssetFormComponent } from './asset-form/asset-form.component';
import {MatRadioModule} from '@angular/material/radio';
import { ShareModule } from 'src/app/shared/share/share.module';

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
    MatSelectModule,
    MatRadioModule,
    ShareModule
  ]
})
export class ManageassetModule { }
