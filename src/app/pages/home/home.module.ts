import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {DrawComponent} from './draw/draw.component';
import {HowtoComponent} from './howto/howto.component';
import {TeamsComponent} from './teams/teams.component';
import {UsersComponent} from './users/users.component';
import {MatButtonModule, MatDividerModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';


@NgModule({
  declarations: [
    HomeComponent,
    DrawComponent,
    HowtoComponent,
    TeamsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule

  ]
})
export class HomeModule { }
