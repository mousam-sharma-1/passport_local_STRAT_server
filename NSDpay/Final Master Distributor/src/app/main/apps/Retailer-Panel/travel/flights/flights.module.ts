import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseDemoModule } from '@fuse/components/demo/demo.module';
import { FuseHighlightModule } from '@fuse/components';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatListModule,MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';

import {MatRadioModule} from '@angular/material/radio';
import { FlightsComponent } from './flights.component';
import {MatBadgeModule} from '@angular/material/badge';


const routes: Routes = [
    {
        path     : '',
        component: FlightsComponent
    }
];
@NgModule({
  declarations: [FlightsComponent],
  imports: [
   RouterModule.forChild(routes),
    CommonModule,
    MatRadioModule,
    MatTableModule,
    MatFormFieldModule,
    MatBadgeModule,
    NgxChartsModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatDatepickerModule,

MatSelectModule,
    MatStepperModule,
    MatListModule,
    FuseSharedModule,
    FuseDemoModule,
    FuseHighlightModule,

  ]
})
export class FlightsModule { }
