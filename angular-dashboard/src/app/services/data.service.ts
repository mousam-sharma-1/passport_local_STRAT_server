import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  Arr=[]

  private messageSource = new BehaviorSubject(this.Arr);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message:any) {
    this.messageSource.next(message)
    console.log("SERVICE :: ",message)
  }

}
