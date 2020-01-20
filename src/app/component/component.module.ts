import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchVideoComponent} from './search-video/search-video.component';
import {SliderComponent} from './slider/slider.component';
import {CreateInfoComponent} from './create-info/create-info.component';
import {UploaderComponent} from './uploader/uploader.component';
import {VoiceRecorderComponent} from './voice-recorder/voice-recorder.component';
import {ConfirmComponent} from './confirm/confirm.component';
import {LoaderComponent} from './loader/loader.component';
import {MatButtonModule, MatCardModule, MatChipsModule, MatToolbarModule, MatTooltipModule} from '@angular/material';


@NgModule({
  declarations: [SearchVideoComponent, SliderComponent, CreateInfoComponent, UploaderComponent, VoiceRecorderComponent, ConfirmComponent, LoaderComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatTooltipModule
  ],
  exports: [SliderComponent]
})
export class ComponentModule {
}
