import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RetailerTransactionComponent } from './retailer-transaction.component';
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
        component: RetailerTransactionComponent
    }
];

@NgModule({
  declarations: [RetailerTransactionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    NgxChartsModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    

    FuseSharedModule,
    FuseDemoModule,
    FuseHighlightModule,
  ]
})
export class RetailerTransactionModule { }
