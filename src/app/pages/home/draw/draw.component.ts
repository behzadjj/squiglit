import { Component, OnInit, AfterViewInit } from '@angular/core';
import { fabric } from 'fabric';
import { MatDialog } from '@angular/material';
import { ImageTraceComponent } from './image-trace/image-trace.component';
import { AccessibleService } from 'src/app/service/accessible/accessible.service';

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
export class DrawComponent implements OnInit, AfterViewInit {
  canvas: any;
  keyword = '';
  currentSelectedColor;
  constructor(
    private dialog: MatDialog,
    private accessibleService: AccessibleService
    ) {

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
  resizeEventListener;


  ngOnInit() {


    this.resizeEventListener = window.addEventListener('resize', this.setCanvasSize, false)
    this.canvas = new fabric.Canvas('myCanvas', {
      // isDrawingMode: true
    });
    this.initHistory();

    this.canvas.freeDrawingBrush.color = 'red';
    this.canvas.freeDrawingBrush.width = 5
  }

  ngOnDestroy(){
    window.removeEventListener('resize', this.setCanvasSize, false)
  }

  ngAfterViewInit(){
    this.setCanvasSize();
  }

  setCanvasSize = () =>{
    const width = document.getElementById('canvas-container').offsetWidth;
    this.canvas.setWidth(width - 50);
    this.canvas.renderAll();
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
    document.getElementById('canvas-container').requestFullscreen();
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
    if(this.keyword.length > 0){
      this.dialog.open(ImageTraceComponent, {
        data:{

        }
      })
    }else{
      this.accessibleService.showResultMessage('Please enter a keyword')
    }
  }



}
