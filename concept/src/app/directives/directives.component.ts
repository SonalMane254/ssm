import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  isLogedIn = false
  pStl = {
    border : '1px solid red',
    font : 'italic'
  }

  @ViewChild('samples')
  samples : ElementRef
  val : string 
   mobs=[
     {nm:'apple',pz:60},
     {nm:'samsung',pz:20},
     {nm:'moto',pz:15}
   ]
  constructor() { }

  ngOnInit() {
  }
  MakeLogin(usnm : string , pass : string){
    this.isLogedIn =(usnm === 'ssm')  && (pass === 'ssm')
}

  onmousemove(val : string){
    console.log(this.samples)
    this.val = this.samples.nativeElement.value
  }
}
