import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intr-com',
  templateUrl: './intr-com.component.html',
  styleUrls: ['./intr-com.component.css']
})
export class IntrComComponent implements OnInit {

  prg : number = 1
  prgStr : string
  rate : number

  constructor() { }

  ngOnInit() {
  }

  onBtnClicked(btn : number) {
    if(btn === 1) {
      this.prgStr = `${this.prg++}%`
      console.log(this.prgStr)
    }
    if(btn === 2) {
      this.prgStr = `${--this.prg}%`
      console.log(this.prgStr)
    }
  }
}
