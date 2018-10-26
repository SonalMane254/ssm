import { Directive, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {
  @Input('appSample')

  @HostBinding('style.width')
  wd : string

  @HostBinding('style.height')
  ht : string

  @HostBinding('class.brd')
  brd : boolean

  constructor() { }

  @HostListener('mouseenter')
  inBx() {
    this.wd='900px'
    this.brd = false
  }

  @HostListener('mouseleave')
  outBx(){
    this.wd='300px'
    this.brd= true
  }
    @HostListener('mousemove')
    Input(){
      this.wd='50px'
      this.brd = true
    }
}
