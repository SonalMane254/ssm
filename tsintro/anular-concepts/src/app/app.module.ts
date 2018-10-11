import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { BtCardComponent } from './bt-card/bt-card.component';
import { CrdComponent } from './bt-card/crd.component';
//import { BootsCardComponent } from './boots-card/boots-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    BtCardComponent,
    CrdComponent,
    //BootsCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
