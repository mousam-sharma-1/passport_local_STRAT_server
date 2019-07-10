import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule,MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FuseSharedModule } from '@fuse/shared.module';

import { UploadDocumentComponent } from './upload-document.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatDividerModule} from '@angular/material/divider';

const routes: Routes = [
    {
        path     : '',
        component: UploadDocumentComponent
    }
];

@NgModule({
    declarations: [
        UploadDocumentComponent
    ],
  imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatDatepickerModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        MatToolbarModule,
        MatListModule,
        MatDividerModule,

        FuseSharedModule,
  ]
})
export class UploadDocumentModule { }
