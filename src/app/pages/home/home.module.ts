import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {DrawComponent} from './draw/draw.component';
import {HowtoComponent} from './howto/howto.component';
import {TeamsComponent} from './teams/teams.component';
import {UsersComponent} from './users/users.component';
import { ShareModule } from 'src/app/share/share.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { ImageTraceComponent } from './draw/image-trace/image-trace.component';


@NgModule({
  declarations: [
    HomeComponent,
    DrawComponent,
    HowtoComponent,
    TeamsComponent,
    UsersComponent,
    ImageTraceComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule,
    ColorPickerModule
  ]
})
export class HomeModule { }
