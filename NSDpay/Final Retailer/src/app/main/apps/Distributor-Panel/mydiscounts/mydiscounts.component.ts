import { Component, OnInit,ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material';

@Component({
  selector: 'app-mydiscounts',
  templateUrl: './mydiscounts.component.html',
  styleUrls: ['./mydiscounts.component.scss']
})
export class MydiscountsComponent implements OnInit {
@ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() { }


  ngOnInit() {

  }

}
