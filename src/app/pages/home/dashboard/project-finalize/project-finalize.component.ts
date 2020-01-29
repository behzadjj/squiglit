import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-project-finalize',
  templateUrl: './project-finalize.component.html',
  styleUrls: ['./project-finalize.component.scss']
})
export class ProjectFinalizeComponent implements OnInit {
  activeAlert = false;
  finaliaze = [
    {
      key: 'word',
      image: '../../../../../assets/image/selection-word-icon.png',
      value: false,
      options: [
        { key: 'I Will Choose My Own Keywords', value: 'choose' },
        { key: 'Let Squigl Select My Keywords', value: 'choose' }
      ]
    }, {
      key: 'group',
      image: '../../../../../assets/image/intelegent-grouping-icon.png',
      value: true,
      options: [
        { key: 'I Will Create My Own Squiglets Grouping', value: 'choose' },
        { key: 'Let Squigl Create My Grouping', value: 'choose' }
      ]
    }, {
      key: 'squigletType',
      image: '../../../../../assets/image/squigletTypes-icon.png',
      value: false,
      options: [
        { key: 'Glyphs', value: 'choose' },
        { key: 'Images', value: 'choose' }
      ]
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  next() {

  }

  changeState(item, state) {
    item.value = state
    setTimeout(
      () => {
        if (this.finaliaze[2].value) {
          this.finaliaze[0].value = true;
          this.finaliaze[1].value = false;
          this.activeAlert = true;
        } else {
          this.activeAlert = false;
        }
      }, 0
    )

  }

}
