import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CrtComponent } from './crt/crt.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { GpstracComponent } from './gpstrac/gpstrac.component';
import { IntrComComponent } from './intr-com/intr-com.component';
import { BtnPnlComponent } from './intr-com/btn-pnl.component';
import { PrgBrComponent } from './intr-com/prg-br.component';

@NgModule({
  declarations: [
    AppComponent,
    CrtComponent,
    DatabindingComponent,
    GpstracComponent,
    IntrComComponent,
    BtnPnlComponent,
    PrgBrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
