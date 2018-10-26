import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginModuleComponent } from './login-form/login-module.component';
import { LoginServiceComponent } from './login-form/login-service.component';
import { RmbMeComponent } from './login-form/rmb-me.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginModuleComponent,
    LoginServiceComponent,
    RmbMeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
