import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import { PowerpointComponent } from './powerpoint/powerpoint.component';
import { ProjectComponent } from './project/project.component';
import { VoiceSelectComponent } from './project/voice-select/voice-select.component';
import { VoiceOptionsComponent } from './project/voice-options/voice-options.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'powerpoint',
    component: PowerpointComponent
  },
  {
    path: 'project/:level',
    component: ProjectComponent,
    children:[
      {path: '', component: VoiceOptionsComponent},
      {path: 'voice/:selected', component: VoiceSelectComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
