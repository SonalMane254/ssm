import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  nm='codekul.com'
  amt=100
  typ='button'
  cls='btn btn-primary'
  constructor() { }

  ngOnInit() {
  }
  clickme(ev:any){
    console.log('clicked')
    console.log(ev)
  }
}
