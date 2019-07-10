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
                        id   : 'project',
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
                id       : 'recharges',
                title    : 'Recharges',
                //translate: 'NAV.Setting',
                type     : 'collapsable',
                icon     : 'mobile_friendly',
                children : [
                    {
                        id   : 'mobileprepaid',
                        title: 'Mobile Prepaid',
                        type : 'item',
                        url  : '/apps/recharges/mobileprepaid'
                    },
                    {
                        id   : 'dth',
                        title: 'DTH',
                        type : 'item',
                        url  : '/apps/recharges/dth'
                    }
                ]
            },
             {
                id       : 'bills',
                title    : 'Utility Payments',
                //translate: 'NAV.Fund',
                type     : 'collapsable',
                icon     : 'note_add',
                children : [
                    {
                        id        : 'mobilepostpaid',
                        title     : 'Mobile Postpaid',
                        type      : 'item',
                        url       : '/apps/bill/mobilepostpaid',
                        exactMatch: true
                    },
                    {
                        id        : 'landline',
                        title     : 'Landline',
                        type      : 'item',
                        url       : '/apps/bill/landline',
                        exactMatch: true
                    },
                    {
                        id        : 'broadband',
                        title     : 'Broadband',
                        type      : 'item',
                        url       : '/apps/bill/broadband',
                        exactMatch: true
                    },
                    {
                        id        : 'electricity',
                        title     : 'Electricity Bill',
                        type      : 'item',
                        url       : '/apps/bill/electricity',
                        exactMatch: true
                    }
                    ,
                    {
                        id        : 'gas',
                        title     : 'Gas Bill',
                        type      : 'item',
                        url       : '/apps/bill/gas',
                        exactMatch: true
                    },
                    {
                        id        : 'water',
                        title     : 'Water Bill',
                        type      : 'item',
                        url       : '/apps/bill/water',
                        exactMatch: true
                    }


                ]
            },
            {
                id       : 'moneytransfer',
                title    : 'Money Transfer',
                //translate: 'NAV.Complaint',
                type     : 'item',
                icon     : 'attach_money',
                url      : '/apps/moneytransfer'
            },
            {
                id       : 'travel',
                title    : 'Travel',
                //translate: 'NAV.Distributor',
                type     : 'collapsable',
                icon     : 'card_travel',
                children : [
                    {
                        id   : 'flights',
                        title: 'Flights',
                        type : 'item',
                        url  : '/apps/travel/flights'
                    },
                    {
                        id   : 'hotels',
                        title: 'Hotels',
                        type : 'item',
                        url  : '/apps/travel/hotels'
                    }
                    ,
                    {
                        id   : 'holiday',
                        title: 'Holiday',
                        type : 'item',
                        url  : '/apps/travel/holiday'
                    }
                ]
            },
            {
                id       : 'insurance',
                title    : 'Insurance',
                //translate: 'NAV.Complaint',
                type     : 'item',
                icon     : 'info',
                url      : '/apps/insurance'
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
                id       : 'discounts',
                title    : 'My Discounts',
                //translate: 'NAV.Discounts',
                type     : 'item',
                icon     : 'dehaze',
                url      : '/apps/discounts'
            },

            {
                id       : 'reports',
                title    : 'Reports',
                //translate: 'NAV.Reports',
                type     : 'collapsable',
                icon     : 'edit',
                children : [
                    {
                        id   : 'ledger',
                        title: 'Ledger History',
                        type : 'item',
                        url  : '/apps/reports/ledger'
                    },
                    {
                        id   : 'myorder',
                        title: 'My Order',
                        type : 'item',
                        url  : '/apps/reports/myorder'
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
            }



];
