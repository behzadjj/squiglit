import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';

export enum FabricMode {
  DRAW = 'draw',
  EDIT = 'edit',
  ERASE = 'erase',
}

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {
  canvas: any;
  keyword = '';
  constructor() {

  }

  readyColor = [
    { key: 'black', value: 'black' },
    { key: 'red', value: 'red' },
    { key: 'blue', value: 'blue' },
    { key: 'green', value: 'green' },
    { key: 'orange', value: 'orange' }
  ]


  ngOnInit() {


    this.canvas = new fabric.Canvas('myCanvas', {
      // isDrawingMode: true
    });


    this.canvas.freeDrawingBrush.color = 'red';

    this.canvas.add(new fabric.IText('Helloss Fabric!'));
  }


  changeColor(color: string = 'black') {
    this.canvas.freeDrawingBrush.color = color;
  }

  changeSize(size: number) {

  }

  changeMode(mode: FabricMode) {
    this.disableAllMode();
    switch (mode) {
      case FabricMode.DRAW: {
        this.canvas.isDrawingMode = true;
      }
      case FabricMode.EDIT: {
        this.canvas.isEditing = true;
      }
      case FabricMode.ERASE: {

      }
    }
  }

  private disableAllMode(){
    this.canvas.isDrawingMode = false;
    this.canvas.isEditing = false;
  }

  fullScreen() {

  }

  undo() {

  }

  redo() {

  }


  clear() {
    this.canvas.clear();
  }



}
