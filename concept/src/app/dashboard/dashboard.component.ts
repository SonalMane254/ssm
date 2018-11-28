import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  abc : boolean = false
  pStl = {
    border : '1px solid red',
    font : 'italic'
  }

  constructor() { }

  ngOnInit() {
  }
  clickMe(od : string){
    this.abc=true
}
}
 