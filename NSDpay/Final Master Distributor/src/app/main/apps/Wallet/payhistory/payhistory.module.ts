import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PayhistoryComponent } from './payhistory.component';


const routes: Routes = [
    {
        path     : '',
        component: PayhistoryComponent
    }
];

@NgModule({
  declarations: [PayhistoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PayhistoryModule { }
