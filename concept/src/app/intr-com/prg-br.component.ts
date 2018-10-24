import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prg-br',
  template: `
  <div class="progress">
  <div class="progress-bar" role="progressbar" [style.width]="prg" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
  `,
  styles: []
})
export class PrgBrComponent implements OnInit {

  @Input()
  prg : string
  
  constructor() { }

  ngOnInit() {
  }

}
