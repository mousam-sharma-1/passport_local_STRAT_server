import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';

const routes = [
   {
        path        : 'dashboards/overview',
        loadChildren: './dashboards/overview/overview.module#OverviewModule'
    },
    {
        path        : 'dashboards/editprofile',
        loadChildren: './dashboards/edit-profile/edit-profile.module#EditModule'
    },
    {
        path        : 'dashboards/uploaddocument',
        loadChildren: './dashboards/upload-document/upload-document.module#UploadDocumentModule'
    },
    {
        path        : 'wallet/paynow',
        loadChildren: './Wallet/paynow/paynow.module#PaynowModule'
    },
    {
        path        : 'wallet/history',
        loadChildren: './Wallet/payhistory/payhistory.module#PayhistoryModule'
    },
    {
        path        : 'settings/profilepassword',
        loadChildren: './settings/profile-password/profile-password.module#ProfilePasswordModule'
    },
    {
        path        : 'settings/profilepassword',
        loadChildren: './settings/profile-password/profile-password.module#ProfilePasswordModule'
    },
    {
        path        : 'settings/securepin',
        loadChildren: './settings/secure-pin/secure-pin.module#SecurePinModule'
    },
    {
        path        : 'funds/bankdetail',
        loadChildren: './funds/bankdetail/bankdetail.module#BankdetailModule'
    },
    {
        path        : 'funds/deposits',
        loadChildren: './funds/deposits/deposits.module#DepositsModule'
    },
    {
        path        : 'funds/creditrequest',
        loadChildren: './funds/creditrequest/creditrequest.module#CreditrequestModule'
    },
    {
        path        : 'funds/creditdeposit',
        loadChildren: './funds/creditdeposit/creditdeposit.module#CreditdepositModule'
    },
    {
        path        : 'discounts',
        loadChildren: './mydiscounts/mydiscounts.module#MydiscountsModule'
    },
    {
        path        : 'distributor/distributordetail',
        loadChildren: './distributor/distributordetail/distributordetail.module#DistributordetailModule'
    },
    {
        path        : 'distributor/distributortransation',
        loadChildren: './distributor/distributortransation/distributortransation.module#DistributortransationModule'
    },
    {
        path        : 'reports/retailerorder',
        loadChildren: './reports/retailerorder/retailerorder.module#RetailerorderModule'
    },
    {
        path        : 'reports/ledger',
        loadChildren: './reports/ledger/ledger.module#LedgerModule'
    },
    {
        path        : 'complaint',
        loadChildren: './complaint/complaint.module#ComplaintModule'
    }
    // {
    //     path        : 'mobile_discounts',
    //     loadChildren: './discount/discount.module#DiscountModule'
    // }
];

@NgModule({
    imports     : [
        RouterModule.forChild(routes),
        FuseSharedModule
    ],
    declarations: []
})
export class AppsModule
{
}
