import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchVideoComponent } from './search-video/search-video.component';
import { SliderComponent } from './slider/slider.component';
import { CreateInfoComponent } from './create-info/create-info.component';
import { UploaderComponent } from './uploader/uploader.component';
import { VoiceRecorderComponent } from './voice-recorder/voice-recorder.component';
import { LoaderComponent } from './loader/loader.component';
import { ShareModule } from '../share/share.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ListComponent } from './list/list.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { PipeModule } from '../pipe/pipe.module';
import { DirectiveModule } from '../directive/directive.module';


@NgModule({
  declarations: [
    SearchVideoComponent,
    SliderComponent,
    CreateInfoComponent,
    UploaderComponent,
    VoiceRecorderComponent,
    LoaderComponent,
    BreadcrumbComponent,
    ConfirmDialogComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    PipeModule,
    DirectiveModule
  ],
  exports: [
    SliderComponent,
    SearchVideoComponent,
    UploaderComponent
  ]
})
export class ComponentModule {
}
