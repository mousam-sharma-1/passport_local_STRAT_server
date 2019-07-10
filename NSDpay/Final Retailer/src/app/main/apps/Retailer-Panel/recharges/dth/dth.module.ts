
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatListModule,MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FuseSharedModule } from '@fuse/shared.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { DthComponent } from './dth.component';

const routes: Routes = [
  {
      path     : '',
      component: DthComponent
  }
];

@NgModule({
  declarations: [DthComponent],
  imports: [
    CommonModule,
      RouterModule.forChild(routes),
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatGridListModule,
      MatSelectModule,
      MatStepperModule,
      MatToolbarModule,
      MatListModule,
  
      FuseSharedModule,
  ]
})
export class DthModule { }
