import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSidebarModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';

import { ChatPanelModule } from 'app/layout/components/chat-panel/chat-panel.module';
import { ContentModule } from 'app/layout/components/content/content.module';
import { FooterModule } from 'app/layout/components/footer/footer.module';
import { NavbarModule } from 'app/layout/components/navbar/navbar.module';
import { QuickPanelModule } from 'app/layout/components/quick-panel/quick-panel.module';
import { ToolbarModule } from 'app/layout/components/toolbar/toolbar.module';

import { VerticalLayout1Component } from 'app/layout/vertical/layout-1/layout-1.component';
//Edit Profile Component
import { EditProfileComponent } from 'app/edit-profile/edit-profile.component';

//Form Module
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

//import { FuseSharedModule } from '@fuse/shared.module';

import { FormsComponent } from 'app/main/ui/forms/forms.component';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
    declarations: [
        VerticalLayout1Component,
        EditProfileComponent,
        FormsComponent
    ],
    imports     : [
        RouterModule,

        FuseSharedModule,
        FuseSidebarModule,

        ChatPanelModule,
        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule,
        // Material
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatSelectModule,
        MatStepperModule,
        MatInputModule,
    ],
    exports     : [
        VerticalLayout1Component
    ]
})
export class VerticalLayout1Module
{
}
