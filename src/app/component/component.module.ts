import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchVideoComponent} from './search-video/search-video.component';
import {SliderComponent} from './slider/slider.component';
import {CreateInfoComponent} from './create-info/create-info.component';
import {UploaderComponent} from './uploader/uploader.component';
import {VoiceRecorderComponent} from './voice-recorder/voice-recorder.component';
import {ConfirmComponent} from './confirm/confirm.component';
import {LoaderComponent} from './loader/loader.component';
import { ShareModule } from '../share/share.module';
import { MatInputModule, MatFormFieldModule } from '@angular/material';


@NgModule({
  declarations: [SearchVideoComponent, SliderComponent, CreateInfoComponent, UploaderComponent, VoiceRecorderComponent, ConfirmComponent, LoaderComponent],
  imports: [
    CommonModule,
    ShareModule,
  ],
  exports: [
    SliderComponent,
    SearchVideoComponent

  ]
})
export class ComponentModule {
}
