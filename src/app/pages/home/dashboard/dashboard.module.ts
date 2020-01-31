import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {ComponentModule} from '../../../component/component.module';
import {DashboardComponent} from './dashboard.component';
import { ShareModule } from 'src/app/share/share.module';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { PowerpointComponent } from './powerpoint/powerpoint.component';
import { ProjectComponent } from './project/project.component';
import { DirectiveModule } from 'src/app/directive/directive.module';
import { ScriptRecordComponent } from './project/script-record/script-record.component';
import { VoiceSelectComponent } from './project/voice-select/voice-select.component';
import { VoiceOptionsComponent } from './project/voice-options/voice-options.component';
import { ProjectFinalizeComponent } from './project-finalize/project-finalize.component';
import { TimeLineComponent } from './time-line/time-line.component';


@NgModule({
  declarations: [
    DashboardComponent,
     PowerpointComponent, ProjectComponent, ScriptRecordComponent, VoiceSelectComponent, VoiceOptionsComponent, ProjectFinalizeComponent, TimeLineComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentModule,
    ShareModule,
    PipeModule,
    DirectiveModule
  ],
  entryComponents:[
    ScriptRecordComponent
  ]
})
export class DashboardModule { }
