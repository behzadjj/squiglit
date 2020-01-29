import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-voice-select',
  templateUrl: './voice-select.component.html',
  styleUrls: ['./voice-select.component.scss']
})
export class VoiceSelectComponent implements OnInit {


  title = '';
  activeOption: 'machine-voice' | 'record' | 'upload';

  titleOptions = {
    'machine-voice': 'Machine Voice',
    'record': 'Record Your Voice',
    'upload': 'Upload Your Audio File'
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (data)=>{
        this.activeOption = data.selected;
        this.title = this.titleOptions[this.activeOption];
      }
    )
  }

}
