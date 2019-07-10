import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatButtonToggleModule, MatIconModule, MatListModule, MatMenuModule, MatSelectModule, MatSlideToggleModule, MatTabsModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseDemoModule } from '@fuse/components/demo/demo.module';
import { FuseHighlightModule } from '@fuse/components';

import { BankDetailComponent } from './bank-detail.component';

import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
    {
        path     : '',
        component: BankDetailComponent
    }
];

@NgModule({
    declarations: [
        BankDetailComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSelectModule,
        FlexLayoutModule,
        MatSlideToggleModule,
        MatTabsModule,

        FuseSharedModule,
        FuseDemoModule,
        FuseHighlightModule,
    ]
})
export class BankDetailModule { }
