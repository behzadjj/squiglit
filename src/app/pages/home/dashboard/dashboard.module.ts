import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {ComponentModule} from '../../../component/component.module';
import {DashboardComponent} from './dashboard.component';
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
