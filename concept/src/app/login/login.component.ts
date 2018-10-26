import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  text : string 
  prgStr : string

  constructor() { }

  ngOnInit() {
  }

  onBtnClicked(txt: string) {
    console.log(`Button clicked`)
    }  
    }
