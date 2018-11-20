import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';


@Component({
  selector: 'app-dash',
  template: `
  <div [class]="cls" role="alert">
  A simple primary alert—check it out!
</div>   
  `,
  styles: []
})
export class DashComponent implements OnInit {
  cls : string


  constructor(
    private sample : SampleService
  ) { }

  ngOnInit() {

    this.sample.receive( str => {
      this.cls = str
  })
  }
}
