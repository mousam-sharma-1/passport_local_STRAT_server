import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MydiscountsComponent } from './mydiscounts.component';
import { RouterModule, Routes } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
    {
        path     : '',
        component: MydiscountsComponent
    }
];

@NgModule({
  declarations: [MydiscountsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatTableModule,
    
    // BrowserAnimationsModule

  ]
})
export class MydiscountsModule { }
