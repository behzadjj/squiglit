import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {ComponentModule} from '../../../component/component.module';
import {DashboardComponent} from './dashboard.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentModule,
    ShareModule
  ]
})
export class DashboardModule { }
