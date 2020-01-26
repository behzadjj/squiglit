import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import { ExpertComponent } from './expert/expert.component';
import { ExpressComponent } from './express/express.component';
import { PowerpointComponent } from './powerpoint/powerpoint.component';
import { ProjectComponent } from './project/project.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'expert',
    component: ExpertComponent
  },
  {
    path: 'express',
    component: ExpressComponent
  },
  {
    path: 'powerpoint',
    component: PowerpointComponent
  },
  {
    path: 'project/:level',
    component: ProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
