import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-distributortransation',
  templateUrl: './distributortransation.component.html',
  styleUrls: ['./distributortransation.component.scss']
})
export class DistributortransationComponent implements OnInit {
    displayedColumns: string[] = ['id', 'companyname', 'name', 'method', 'depositid', 'order' , 'opbalance', 'disopbalance', 'remark', 'date'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
  
    ngOnInit() {
      this.dataSource.paginator = this.paginator;
    }
  }
  
  export interface PeriodicElement {
    id: number;
    companyname: string;
    name: string;
    method: string;
    depositid: string;
    order: number;
    opbalance: number;
    disopbalance: number;
    remark: string;
    date: string;

  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {id: 6492954840, companyname: 'Demo ID distributer', name: 'Distributer', method:'Transaction via master distributor',depositid: '8848283348OPIBHZ', order: 10.00, opbalance:1245
, disopbalance: 287, remark: 'fhhfdgh', date: '14-10-18'}   
  ];
