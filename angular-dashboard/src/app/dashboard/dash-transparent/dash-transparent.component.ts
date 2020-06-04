import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dash-transparent',
  templateUrl: './dash-transparent.component.html',
  styleUrls: ['./dash-transparent.component.css']
})
export class DashTransparentComponent implements OnInit {
  myMatForm:FormGroup;
  Arr=[]
  constructor(private _formBuilder: FormBuilder,private data: DataService) { }

  onSubmit(myform : NgForm) {
    console.log("form value :: ",this.myMatForm.value);
    // let oj = { name : this.myMatForm.value.name,number : this.myMatForm.value.number};
    this.Arr.push(this.myMatForm.value)
    console.log(this.Arr)
    this.newMessage()
  this.myMatForm.reset();
  }

  newMessage() {
    this.data.changeMessage(this.Arr)
  }

  ngOnInit() {
    this.myMatForm= this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.data.currentMessage.subscribe(message => this.Arr = message)

  }

}
