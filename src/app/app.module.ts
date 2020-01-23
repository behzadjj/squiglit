import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PowerpointComponent } from './powerpoint/powerpoint.component';
import { MatDialogModule } from '@angular/material';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PowerpointComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
