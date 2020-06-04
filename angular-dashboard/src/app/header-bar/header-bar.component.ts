import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  constructor() { 
    // interface JQuery {
    //   tooltip():void;
    // }
    // $(document).ready(function(){
    //  ($('.logo') as any ).tooltip();   
    // });

  }

  ngOnInit(): void {
  }

}
