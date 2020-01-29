import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voice-options',
  templateUrl: './voice-options.component.html',
  styleUrls: ['./voice-options.component.scss']
})
export class VoiceOptionsComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
  }

}
