import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {ComponentModule} from '../../../component/component.module';
import {DashboardComponent} from './dashboard.component';
import { ShareModule } from 'src/app/share/share.module';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { ExpertComponent } from './expert/expert.component';
import { PowerpointComponent } from './powerpoint/powerpoint.component';
import { ExpressComponent } from './express/express.component';
import { ProjectComponent } from './project/project.component';
import { DirectiveModule } from 'src/app/directive/directive.module';


@NgModule({
  declarations: [
    DashboardComponent, ExpertComponent, PowerpointComponent, ExpressComponent, ProjectComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentModule,
    ShareModule,
    PipeModule,
    DirectiveModule
  ]
})
export class DashboardModule { }
