import { Injectable } from '@angular/core';
import { EventEmitter } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class SampleService {
  private em : EventEmitter<string> = new EventEmitter()


  constructor() { }

  send(str : string) {
    this.em.emit(str)
  }

  receive( onRc : (str : string) => void ) {
    this.em.subscribe( str => onRc(str))
  }
}
