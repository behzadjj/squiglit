import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-script-record',
  templateUrl: './script-record.component.html',
  styleUrls: ['./script-record.component.scss']
})
export class ScriptRecordComponent implements OnInit {
  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);
  constructor(
    private dialogRef: MatDialogRef<ScriptRecordComponent>,
    @Inject(MAT_DIALOG_DATA) public data
    ) { }

  ngOnInit() {
  }


  cancel(){
    this.dialogRef.close();
  }

  confirm(){
    
  }

}
