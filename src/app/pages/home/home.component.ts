import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listPanels = [
    { title: 'Dashboard', text: '', routerLink: '', icon: 'fa fa-home' },
    { title: 'Draw Glyph', text: '', routerLink: '/draw', icon: 'fa fa-map' },
    { title: 'Organization', text: '', routerLink: '/', icon: 'fa fa-chart-line' },
    { title: 'Recycle Bin', text: '', routerLink: '/', icon: 'fa fa-tasks' },
    { title: 'How to?', text: '', routerLink: '/', icon: 'fa fa-tasks' },
    { title: 'Sharing Dashboard', text: '', routerLink: '/', icon: 'fa fa-tasks' },
    { title: 'Teams', text: '', routerLink: '/', icon: 'fa fa-cog' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
