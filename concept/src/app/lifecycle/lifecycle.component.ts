import { Component, 
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  Input

} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentChecked, AfterContentInit ,AfterViewChecked, AfterViewInit, OnDestroy {

  @Input()
  myDt : string

  constructor() { }

  ngOnChanges(sc : SimpleChanges){
    console.log(`ngOnChanges`)
    console.log(sc)
  }
  ngOnInit() {
    console.log(`ngOnInit`)
  }
  ngDoCheck(){
    console.log(`ngDoCheck`)
  }
ngAfterContentChecked(): void{
  console.log(`ngAfterContentChecked`)
}
ngAfterContentInit(): void{
  console.log(`ngAfterContentInit`)
}
ngAfterViewChecked(): void{
  console.log(`ngAfterViewChecked`)
}
ngAfterViewInit(): void{
  console.log(`ngAfterViewInit`)
}
ngOnDestroy(): void{
  console.log(`ngOnDestroy`)
}
}
