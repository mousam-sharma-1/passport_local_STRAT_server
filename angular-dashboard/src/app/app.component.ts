import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dashboard';
  @HostListener('window:scroll', [])

  scroll(){
    // console.log("click")
    if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
    document.getElementById('main-header').classList.add('top-expand');
  }
  else{
    document.getElementById('main-header').classList.remove('top-expand');
  }
  }

}

