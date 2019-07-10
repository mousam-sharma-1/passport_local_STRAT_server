import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-retailerorder',
  templateUrl: './retailerorder.component.html',
  styleUrls: ['./retailerorder.component.scss']
})
export class RetailerorderComponent implements OnInit {

    displayedColumns: string[] = ['id','name','description','transid','acc','orderamt','cramt','dramt','opbalance','date','status','details'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
  
    ngOnInit() {
      this.dataSource.paginator = this.paginator;
    }
}
export interface PeriodicElement {
    id:number;
   name: string;
   description:string;
   transid:string;
   acc:number;
   orderamt: number;
   cramt: number;
   dramt: number;
   opbalance: number;
   date: string;
   status: string;
   details: string;

  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {id: 1310985706, name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    acc: 2259374909, orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' ,details : 'View Details' }, 
    {id: 1310985706, name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    acc: 2259374909, orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' ,details : 'View Details' },
    {id: 1310985706, name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    acc: 2259374909, orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' ,details : 'View Details' },
    {id: 1310985706, name: 'DS Jaiswal', description : 'Credit Deposit', transid : 'AVFQOH1475711804' , 
    acc: 2259374909, orderamt : 10 , cramt : 0.00, dramt : 10, opbalance :72.02 , date : '2019-03-14 16:50:55' 
    , status : 'Approved' ,details : 'View Details' }
       
  ];
