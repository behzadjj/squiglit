import {Component, OnInit, Input, OnChanges} from '@angular/core';
import { Project } from 'src/app/models/project';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnChanges {

  date = Date.now();

  @Input() data: {
    results: Array<Project>,
    videosLimit: any,
    createdVideos: number,
    allowToCreateProject: boolean,
  };

  items: Array<Project> = [];

  constructor() {
  }

  ngOnInit() {
    this.initData();
  }

  ngOnChanges(){
    this.initData();
  }

  initData(){
    console.log(this.data)
    this.items = this.data.results;
  }

  move(element: any, side: 'R' | 'L') {
    if (side === 'R') {
      if ((element.scrollWidth - element.scrollLeft) === element.offsetWidth) {
        console.log('refreshNeed');
        // this.addItems(element);
      } else {
        element.scroll(300 + element.scrollLeft, 0);
      }
    } else {
      element.scroll(element.scrollLeft - 300, 0);
    }

  }

  getScrollbarWidth(el: any) {
  }

  addItems(element: any) {
    this.items.push(
      {number: 10},
      {number: 11},
      {number: 12},
      {number: 13},
    );
    setTimeout(
      () => {
        element.scroll((element.offsetWidth / 2) + element.scrollLeft, 0);
      }, 0
    );
  }

}
