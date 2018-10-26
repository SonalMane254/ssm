import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textbox',
  template: `
  <label>Email address</label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" #eml>
  <br>
  <label>Password</label><br>
    <input type="password" class="form-control" name="password" id="password" placeholder="Password">
  `,
  styles: []
})
export class TextboxComponent implements OnInit {

  @Input()
  text1 : string
  text2 : number
  
  constructor() { }

  ngOnInit() {
  }

}
