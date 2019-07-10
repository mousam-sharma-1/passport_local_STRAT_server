import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-retailerdetail',
  templateUrl: './retailer-detail.component.html',
  styleUrls: ['./retailer-detail.component.scss']
})
export class RetailerDetailComponent implements OnInit {
    displayedColumns: string[] = ['id', 'name', 'type', 'mobile', 'company', 'balance' , 'amt', 'money', 'child','commission'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
  
    ngOnInit() {
      this.dataSource.paginator = this.paginator;
    }
  }
  
  export interface PeriodicElement {
    id: number;
    name: string;
    type: string;
    mobile: number;
    company: string;
    balance: number;
    amt: number;
    money: string;
    child: string;
    commission: string;

  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {id: 6492954840, name: 'Demo ID distributer One', type: 'AGENT', mobile: 9654082489,company: 'demo name', balance: 32.71, amt:1245
, money: 'Send Money', child: 'View Child Larger', commission: ''}  ,
{id: 1578954855, name: 'Demo ID distributer Two', type: 'AGENT', mobile: 9654082489,company: 'demo name', balance: 32.71, amt:1245
, money: 'Send Money', child: 'View Child Larger', commission: ''} 
  ];

