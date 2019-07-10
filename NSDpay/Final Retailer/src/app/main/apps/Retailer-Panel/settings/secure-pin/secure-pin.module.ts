import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatListModule,MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FuseSharedModule } from '@fuse/shared.module';

import { SecurePinComponent } from './secure-pin.component';

const routes: Routes = [
    {
        path     : '',
        component: SecurePinComponent
    }
];

@NgModule({
    declarations: [
        SecurePinComponent
      ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatSelectModule,
      MatStepperModule,
      MatToolbarModule,
      MatListModule,
  
      FuseSharedModule,
    ]
  })
export class SecurePinModule { }
