import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview.component';
import { MatListModule, MatInputModule,  MatStepperModule } from '@angular/material';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule, MatTabsModule } from '@angular/material';

import {FlexLayoutModule} from "@angular/flex-layout";


const routes: Routes = [
    {
        path     : '',
        component: OverviewComponent
    }
];

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,
    FlexLayoutModule,
    MatListModule,
    MatToolbarModule,
    MatStepperModule,
    MatInputModule,
  ]
})
export class OverviewModule { }
