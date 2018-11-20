import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { ContaintContainerComponent } from './containt-container/containt-container.component';
import { NavBarComponent } from './navbar/navbar.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [DashComponent, LeftMenuComponent, ContaintContainerComponent, NavBarComponent, OrdersComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class DashModule { }