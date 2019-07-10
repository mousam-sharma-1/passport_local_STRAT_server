import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';

const routes = [
    {
        path        : 'dashboards/overview',
        loadChildren: './Retailer-Panel/dashboard/overview/overview.module#OverviewModule'
    },
    {
        path        : 'dashboards/editprofile',
        loadChildren: './Retailer-Panel/dashboard/edit-profile/edit-profile.module#EditModule'
    },
    {
        path        : 'dashboards/uploaddocument',
        loadChildren: './Retailer-Panel/dashboard/upload-document/upload-document.module#UploadDocumentModule'
    },
    {
        path        : 'wallet/paynow',
        loadChildren: './Retailer-Panel/Wallet/paynow/paynow.module#PaynowModule'
    },
    {
        path        : 'wallet/history',
        loadChildren: './Retailer-Panel/Wallet/payhistory/payhistory.module#PayhistoryModule'
    },
    {
        path        : 'recharges/mobileprepaid',
        loadChildren: './Retailer-Panel/recharges/mobileprepaid/mobileprepaid.module#MobileprepaidModule'
    },
    {
        path        : 'recharges/dth',
        loadChildren: './Retailer-Panel/recharges/dth/dth.module#DthModule'
    },
    {
        path        : 'bill/mobilepostpaid',
        loadChildren: './Retailer-Panel/billpayments/mobilepostpaid/mobilepostpaid.module#MobilepostpaidModule'
    },
    {
        path        : 'bill/landline',
        loadChildren: './Retailer-Panel/billpayments/landline/landline.module#LandlineModule'
    },
    {
        path        : 'bill/broadband',
        loadChildren: './Retailer-Panel/billpayments/broadband/broadband.module#BroadbandModule'
    },
    {
        path        : 'bill/electricity',
        loadChildren: './Retailer-Panel/billpayments/electricity/electricity.module#ElectricityModule'
    },
    {
        path        : 'bill/gas',
        loadChildren: './Retailer-Panel/billpayments/gas/gas.module#GasModule'
    },
    {
        path        : 'bill/water',
        loadChildren: './Retailer-Panel/billpayments/water/water.module#WaterModule'
    },
    {
        path        : 'travel/flights',
        loadChildren: './Retailer-Panel/travel/flights/flights.module#FlightsModule'
    },
    {
        path        : 'settings/profilepassword',
        loadChildren: './Retailer-Panel/settings/profile-password/profile-password.module#ProfilePasswordModule'
    },
    {
        path        : 'settings/securepin',
        loadChildren: './Retailer-Panel/settings/secure-pin/secure-pin.module#SecurePinModule'
    },
    {
        path        : 'funds/bankdetail',
        loadChildren: './Retailer-Panel/fund-request/bank-detail/bank-detail.module#BankDetailModule'
    },
    {
        path        : 'funds/deposits',
        loadChildren: './Retailer-Panel/fund-request/deposit/deposit.module#DepositModule'
    },
    {
        path        : 'funds/creditrequest',
        loadChildren: './Retailer-Panel/fund-request/credit-request/credit-request.module#CreditRequestModule'
    },
    {
        path        : 'funds/creditdeposit',
        loadChildren: './Retailer-Panel/fund-request/credit-deposit/credit-deposit.module#CreditDepositModule'
    },
    {
        path        : 'discounts',
        loadChildren: './Retailer-Panel/mydiscounts/mydiscounts.module#MydiscountsModule'
    },
    {
        path        : 'reports/ledger',
        loadChildren: './Retailer-Panel/reports/ledger-history/ledger-history.module#LedgerHistoryModule'
    },
    {
        path        : 'reports/myorder',
        loadChildren: './Retailer-Panel/reports/myorder/myorder.module#MyorderModule'
    },
    {
        path        : 'complaint',
        loadChildren: './Retailer-Panel/complaint/complaint.module#ComplaintModule'
    }
    
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
