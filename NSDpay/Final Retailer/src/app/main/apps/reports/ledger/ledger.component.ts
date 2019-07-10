import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.scss']
})

export class LedgerComponent implements OnInit {
    displayedColumns: string[] = ['name','description','transid','orderamt','cramt','dramt','opbalance','date','status'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
  
    ngOnInit() {
      this.dataSource.paginator = this.paginator;
    }
  }
  
  export interface PeriodicElement {
   name: string;
   description:string;
   transid:string;
   orderamt: number;
   cramt: number;
   dramt: number;
   opbalance: number;
   date: string;
   status: string;

  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' },
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' },
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' },
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' },
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' },
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' },
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' }
    ,
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' }
    ,
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' }
    ,
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' },
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' },
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' },
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' },
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' },
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' },
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' },
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' },
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' },
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' },
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' },
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' },
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' },
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' },
    {name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' }
       
  ];

