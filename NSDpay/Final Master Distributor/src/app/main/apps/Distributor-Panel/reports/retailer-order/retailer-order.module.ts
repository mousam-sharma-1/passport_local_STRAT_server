import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RetailerOrderComponent } from './retailer-order.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseDemoModule } from '@fuse/components/demo/demo.module';
import { FuseHighlightModule } from '@fuse/components';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatListModule,MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}


const routes: Routes = [
    {
        path     : '',
        component: RetailerOrderComponent
    }
];


@NgModule({
    declarations: [RetailerOrderComponent],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      MatTableModule,
     
      FlexLayoutModule,
      NgxChartsModule,
      MatButtonModule,
      MatDatepickerModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatPaginatorModule,
           MatFormFieldModule,
   
  
    
    MatSelectModule,
    MatStepperModule,
    MatListModule,

      FuseSharedModule,
      FuseDemoModule,
      FuseHighlightModule,
    ]
})
export class RetailerOrderModule { }
