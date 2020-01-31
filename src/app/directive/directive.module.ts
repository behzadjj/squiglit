import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisableControlDirective } from './disable-control.directive';
import { DragDropDirective } from './drag-drop/drag-drop.directive';



@NgModule({
  declarations: [
    DisableControlDirective,
    DragDropDirective,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DisableControlDirective,
    DragDropDirective
  ]
})
export class DirectiveModule { }
