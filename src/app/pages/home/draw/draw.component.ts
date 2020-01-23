import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { MatDialog } from '@angular/material';

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
  keyword = ' ';
  currentSelectedColor;
  constructor(private dialog: MatDialog) {

  }
  isRedoing = false;
  h = [];

  readyColor = [
    { key: 'black', value: 'black' },
    { key: 'red', value: 'red' },
    { key: 'blue', value: 'blue' },
    { key: 'green', value: 'green' },
    { key: 'pink', value: 'pink' },
    { key: 'orange', value: 'orange' }
  ]
  historyProcessing;
  historyUndo;
  historyNextState

  ngOnInit() {


    this.canvas = new fabric.Canvas('myCanvas', {
      // isDrawingMode: true
    });
    this.initHistory();

    this.canvas.freeDrawingBrush.color = 'red';
    this.canvas.freeDrawingBrush.width = 5
  }

  initHistory() {

    this.historyUndo = [];
    this.historyNextState = this.historyNext();

    this.canvas.on({
      "object:added": this.historySaveAction,
      "object:removed": this.historySaveAction,
      "object:modified": this.historySaveAction
    })
  }


  historySaveAction = () => {
    if (this.historyProcessing)
      return;
  
    const json = this.historyNextState;
    this.historyUndo.push(json);
    this.historyNextState = this.historyNext();
  }

  historyNext = () => {
    return JSON.stringify(this.canvas.toDatalessJSON(this.canvas.extraProps));
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

  private disableAllMode() {
    this.canvas.isDrawingMode = false;
    this.canvas.isEditing = false;
  }

  fullScreen() {

  }

  undo() {
    this.historyProcessing = true;

    const history = this.historyUndo.pop();
    if (history) {
      this.canvas.loadFromJSON(history).renderAll();
    }
  
    this.historyProcessing = false;
  }

  redo() {
    this.historyProcessing = true;

    
    if (this.historyNextState) {
      this.canvas.loadFromJSON(this.historyNextState).renderAll();
    }
  
    this.historyProcessing = false;
    this.historySaveAction()
  }


  clear() {
    this.canvas.clear();
  }


  imageTraceDialog(){

  }



}
