import { Directive, HostBinding, HostListener, Input, Output,ViewChild,ElementRef } from '@angular/core';

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

  @ViewChild('nm')
  nm : ElementRef
  val : string


  constructor() { }

  @HostListener('mouseenter')
  inBx() {
    this.wd='500px'
    this.brd = false
  }

  @HostListener('mouseleave')
  outBx(){
    this.wd='300px'
    this.brd= true
  }
    @HostListener('onmousemove')
    Input(){
      this.wd = "preview"
      var pre = document.getElementById("preview");
       pre.style.visibility = "visible";
       
    }
    
    zoomIn(val : string){
      //this.val = val
      console.log(this.nm)
    this.val = this.nm.nativeElement.value
}
}