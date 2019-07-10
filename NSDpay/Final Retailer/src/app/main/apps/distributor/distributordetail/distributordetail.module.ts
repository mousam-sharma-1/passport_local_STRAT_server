import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DistributordetailComponent } from './distributordetail.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseDemoModule } from '@fuse/components/demo/demo.module';
import { FuseHighlightModule } from '@fuse/components';
import {MatInputModule} from '@angular/material/input';

import { MatButtonModule, MatIconModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from "@angular/flex-layout";

const routes: Routes = [
    {
        path     : '',
        component: DistributordetailComponent
    }
];

@NgModule({
  declarations: [DistributordetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatFormFieldModule,
    FlexLayoutModule,
    NgxChartsModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,

    FuseSharedModule,
    FuseDemoModule,
    FuseHighlightModule,
  ]
})
export class DistributordetailModule { }
