import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-video',
  templateUrl: './search-video.component.html',
  styleUrls: ['./search-video.component.scss']
})
export class SearchVideoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  search(){
    console.log('Search')
  }
}
