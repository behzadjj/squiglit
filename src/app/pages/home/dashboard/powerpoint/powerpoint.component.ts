import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-powerpoint',
  templateUrl: './powerpoint.component.html',
  styleUrls: ['./powerpoint.component.scss']
})
export class PowerpointComponent implements OnInit {



  files = [];

  directory = '';

  resultMessage = '';

  @Input() type: string;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

  onFileSelected(files) {
      for (let i = 0; i < files.length; i++) {
          this.files.push(files[i]);
      }
  }


  deleteAttachment(index) {
      this.files.splice(index, 1);
  }

  uploadFiles() {
      for (const fileKey in this.files) {
          this.upload(this.files[fileKey]);
      }
  }


  upload(file) {
      this.resultMessage = '';
      const formData = new FormData();
      formData.append('file', file);
      // this.apiService.('admin/upload?directory=' + this.directory + '/', formData, {
      //     reportProgress: true,
      //     observe: 'events'
      // }).subscribe(
      //     (evt: any) => {
      //         if (evt.type == HttpEventType.UploadProgress) {
      //             file.progress = Math.round(evt.loaded / evt.total * 100);
      //         } else if (evt.type == HttpEventType.Response) {
      //             file.ready = true;
      //         }
      //     }, () => {
      //         file.ready = false;
      //         file.progress = 0;
      //     }
      // );
  }

  uploadFile(event) {
      for (let index = 0; index < event.length; index++) {
          const element = event[index];
          this.files.push(element.name);
      }
  }
}
