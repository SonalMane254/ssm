import { Crd } from './crd';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpstrac',
  templateUrl: './gpstrac.component.html',
  styleUrls: ['./gpstrac.component.css']
})
export class GpstracComponent implements OnInit {
  @Input()
  crd: Crd

 
  constructor() { }

  ngOnInit() {
  }

  goSm(crd : Crd) {
    
    console.log(`Title is ${crd.ttl}`)
    
  }

}
