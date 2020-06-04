import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dash-content',
  templateUrl: './dash-content.component.html',
  styleUrls: ['./dash-content.component.css']
})
export class DashContentComponent implements OnInit {

  MainArr=[]

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.MainArr = message)
  }

}
