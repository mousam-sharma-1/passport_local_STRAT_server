import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule,MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FuseSharedModule } from '@fuse/shared.module';

import { EditProfileComponent } from './edit-profile.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';

const routes: Routes = [
    {
        path     : '',
        component: EditProfileComponent
    }
];

@NgModule({
    declarations: [
        EditProfileComponent
    ],
  imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatDividerModule,
        MatStepperModule,
        MatToolbarModule,
        MatListModule,

        FuseSharedModule,
  ]
})
export class EditModule { }
