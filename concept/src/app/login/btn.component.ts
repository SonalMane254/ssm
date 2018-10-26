import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn',
  template: `
  <button type="button" class="btn btn-primary" [ngStyle]="{border : '1px solid yellow'}" (click)="forBtn(1)">Login</button>
  `,
  styles: []
})
export class BtnComponent implements OnInit {

  @Output()
  onBtn: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  forBtn(btn: number) {
    this.onBtn.emit(btn)
  }

}
