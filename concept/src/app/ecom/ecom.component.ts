import { Component, OnInit, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-ecom',
  templateUrl: './ecom.component.html',
  styleUrls: ['./ecom.component.css']
})
export class EcomComponent implements OnInit {

  @HostBinding('class.showMe')
  show : boolean

  constructor() { }

  ngOnInit() {
  }

  @HostListener('Click')
  inBx(){
    console.log("showMe")
     this.show
  }
   openNav() {
    console.log("mySidenav");
}

 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
}
