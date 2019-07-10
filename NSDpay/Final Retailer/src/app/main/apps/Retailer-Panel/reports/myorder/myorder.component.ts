import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-ledger',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.scss']
})

export class MyorderComponent implements OnInit {
    displayedColumns: string[] = ['description','transid','acc','remitter','orderamt','cramt','dramt','opbalance','date','status','print','response','view'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
  
    ngOnInit() {
      this.dataSource.paginator = this.paginator;
    }
  }
  
  export interface PeriodicElement {
   description:string;
   transid:string;
   acc:number;
   remitter:number;
   orderamt: number;
   cramt: number;
   dramt: number;
   opbalance: number;
   date: string;
   status: string;
   print:string;
   response:string;
   view:string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {description : 'Credit Deposit', transid : 'AVFQOH1475711804' , acc:544654646,remitter:434464,
    orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved',print:"Print",response:"",view: "View Details" }
       
  ];

