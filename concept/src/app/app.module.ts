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

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BarRatingModule } from "ngx-bar-rating";
import { LoclRefComponent } from './locl-ref/locl-ref.component';
import { AlPrjComponent } from './locl-ref/al-prj.component';
import { LoginComponent } from './login/login.component';
import { TextboxComponent } from './login/textbox.component';
import { BtnComponent } from './login/btn.component';
import { DirectivesComponent } from './directives/directives.component';
import { SampleDirective } from './directives/sample.directive';
import { ZoomComponent } from './zoom/zoom.component';

@NgModule({
  declarations: [
    AppComponent,
    CrtComponent,
    DatabindingComponent,
    GpstracComponent,
    IntrComComponent,
    BtnPnlComponent,
    PrgBrComponent,
    LoclRefComponent,
    AlPrjComponent,
    LoginComponent,
    TextboxComponent,
    BtnComponent,
    DirectivesComponent,
    SampleDirective,
    ZoomComponent,
   ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
