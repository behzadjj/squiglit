import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagePipe } from './language/language.pipe';



@NgModule({
  declarations: [LanguagePipe],
  imports: [
    CommonModule
  ],
  exports: [
    LanguagePipe
  ]
})
export class PipeModule { }
