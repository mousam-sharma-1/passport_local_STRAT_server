import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {

                id       : 'dashboards',
                title    : 'Dashboards',
               // translate: 'NAV.DASHBOARDS',
                type     : 'collapsable',
                icon     : 'dashboard',
                children : [
                    {
                        id   : 'overview',
                        title: 'Overview',
                        type : 'item',
                        url  : '/apps/dashboards/overview'
                    },
                    {
                        id   : 'edit-profile',
                        title: 'Edit Profile',
                        type : 'item',
                        url  : '/apps/dashboards/editprofile'
                    },
                    {
                        id   : 'project',
                        title: 'Upload Document',
                        type : 'item',
                        url  : '/apps/dashboards/uploaddocument'
                    }

                ]
            },
            {
                id       : 'wallet',
                title    : 'Wallet to Wallet',
                //translate: 'NAV.Setting',
                type     : 'collapsable',
                icon     : 'account_balance_wallet',
                children : [
                    {
                        id   : 'paynow',
                        title: 'Pay Now',
                        type : 'item',
                        url  : '/apps/wallet/paynow'
                    },
                    {
                        id   : 'securepin',
                        title: 'Wallet Pay History',
                        type : 'item',
                        url  : '/apps/wallet/history'
                    }
                ]
            },
            {
                id       : 'settings',
                title    : 'Settings',
                //translate: 'NAV.Setting',
                type     : 'collapsable',
                icon     : 'settings',
                children : [
                    {
                        id   : 'profilepassword',
                        title: 'Profile Password',
                        type : 'item',
                        url  : '/apps/settings/profilepassword'
                    },
                    {
                        id   : 'securepin',
                        title: 'Secure Pin',
                        type : 'item',
                        url  : '/apps/settings/securepin'
                    }
                ]
            },
            {
                id       : 'fundrequest',
                title    : 'Fund Request',
                //translate: 'NAV.Fund',
                type     : 'collapsable',
                icon     : 'account_balance',
                children : [
                    {
                        id        : 'bankdetail',
                        title     : 'Bank Detail',
                        type      : 'item',
                        url       : '/apps/funds/bankdetail',
                        exactMatch: true
                    },
                    {
                        id        : 'deposits',
                        title     : 'Deposit',
                        type      : 'item',
                        url       : '/apps/funds/deposits',
                        exactMatch: true
                    },
                    {
                        id        : 'creditrequest',
                        title     : 'Credit Request',
                        type      : 'item',
                        url       : '/apps/funds/creditrequest',
                        exactMatch: true
                    },
                    {
                        id        : 'creditdeposit',
                        title     : 'Credit Request Deposit',
                        type      : 'item',
                        url       : '/apps/funds/creditdeposit',
                        exactMatch: true
                    }
                ]
            },
            {
                id       : 'distributor',
                title    : 'My Distributor Network',
                //translate: 'NAV.Distributor',
                type     : 'collapsable',
                icon     : 'account_circle',
                children : [
                    {
                        id   : 'distributordetail',
                        title: 'Distributor Details',
                        type : 'item',
                        url  : '/apps/distributor/distributordetail'
                    },
                    {
                        id   : 'distributortransition',
                        title: 'Distributor Transition',
                        type : 'item',
                        url  : '/apps/distributor/distributortransation'
                    }
                ]
            },
            {
                id       : 'reports',
                title    : 'Reports',
                //translate: 'NAV.Reports',
                type     : 'collapsable',
                icon     : 'edit',
                children : [
                    {
                        id   : 'retailerorder',
                        title: 'Retailer Order',
                        type : 'item',
                        url  : '/apps/reports/retailerorder'
                    },
                    {
                        id   : 'ledger',
                        title: 'Ledger History',
                        type : 'item',
                        url  : '/apps/reports/ledger'
                    }
                ]
            },
            {
                id       : 'complaint',
                title    : 'Complaint',
                //translate: 'NAV.Complaint',
                type     : 'item',
                icon     : 'info',
                url      : '/apps/complaint'
            }



];
