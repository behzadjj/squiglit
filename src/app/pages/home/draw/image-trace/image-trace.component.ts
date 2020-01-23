import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-image-trace',
  templateUrl: './image-trace.component.html',
  styleUrls: ['./image-trace.component.scss']
})
export class ImageTraceComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ImageTraceComponent>) { }

  results = [
    {
      name: "Cartoon Seaweed Stock Image - Image 37025131.jpeg",
      thumbnailUrl: "https://tse2.mm.bing.net/th?id=OIP.2AMjrp0o1W5LSQ-yaQJRmgHaH6&pid=Api",
      contentUrl: "http://thumbs.dreamstime.com/z/cartoon-seaweed-black-white-line-retro-style-vector-available-37025131.jpg",
      contentSize: "89848 B",
      encodingFormat: "jpeg",
      width: "1300",
      height: "1390",
      thumbnailWidth: "474",
      thumbnailHeightt: "506",
      slug: null
    }
  ]
  ngOnInit() {
  }


  insert() {
  }

  cancel() {
    this.dialogRef.close({ status: 'unSucess' });
  }
}
