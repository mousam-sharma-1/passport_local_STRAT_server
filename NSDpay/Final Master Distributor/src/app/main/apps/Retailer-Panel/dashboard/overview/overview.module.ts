import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatInputModule,  MatStepperModule } from '@angular/material';

import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule, MatTabsModule } from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";


import { OverviewComponent } from './overview.component';

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
        FlexLayoutModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        MatToolbarModule,
        MatListModule,
        MatMenuModule,
        MatTabsModule,
        

        
  ]
})
export class OverviewModule { }
