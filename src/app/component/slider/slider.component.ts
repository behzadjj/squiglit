import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  items = [
    {number: 1},
    {number: 2},
    {number: 3},
    {number: 4},
    {number: 5},
    {number: 6},
    {number: 7},
    {number: 8},
    {number: 9},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  move(element: any, side: 'R' | 'L') {
    if (side === 'R') {
      if ((element.scrollWidth - element.scrollLeft) === element.offsetWidth) {
        console.log('refreshNeed');
        this.addItems(element);
      } else {
        element.scroll(350 + element.scrollLeft, 0);
      }
    } else {
      element.scroll(element.scrollLeft - 350, 0);
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
