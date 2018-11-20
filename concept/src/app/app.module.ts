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
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { EcomComponent } from './ecom/ecom.component';
import { LfMnComponent } from './ecom/lf-mn/lf-mn.component';
import { SampDirective } from './zoom/samp.directive';
import { HoverComponent } from './hover/hover.component';
import { ServicesComponent } from './services/services.component';
import { DrpComponent } from './services/drp.component';
import { AlcComponent } from './services/alc.component';
import { DataComponent } from './services/data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './dashboard/nav.component';
import { DashComponent } from './dashboard/dash.component';

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
    LifecycleComponent,
    EcomComponent,
    LfMnComponent,
    SampDirective,
    HoverComponent,
    ServicesComponent,
    DrpComponent,
    AlcComponent,
    DataComponent,
    DashboardComponent,
    NavComponent,
    DashComponent,
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
