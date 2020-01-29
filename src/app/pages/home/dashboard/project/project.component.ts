import { Component, OnInit, Directive, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AccessibleService } from 'src/app/service/accessible/accessible.service';
import { LanguagePipe } from 'src/app/pipe/language/language.pipe';
import { MatDialog } from '@angular/material';
import { ScriptRecordComponent } from './script-record/script-record.component';
import { BreakpointState, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

export interface ProjectInfo {
  name: string;
  category: string;
  script: string;
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private accessibleService: AccessibleService,
    private language: LanguagePipe,
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) { }

  projectInfo: ProjectInfo = {} as ProjectInfo;

  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.XSmall);
  projectInfoLock = false;

  form;

  ngOnInit() {
    this.form = this.fb.group({
      name: [{ value: this.projectInfo.name, disabled: false }, Validators.required],
      script: [this.projectInfo.script, [Validators.required, Validators.minLength(150)]],
      category: [this.projectInfo.category, []],
    });

    console.log(this.form.get('script'));
  }

  next() {

    if (this.projectInfoLock) {

    } else {
      if (this.form.valid) {
        this.projectInfoLock = true;
      } else {
        this.accessibleService
          .showResultMessage(this.language.transform('Please enter valid values in project info Form'))
      }
    }

  }

  recorderDialog() {
    const dialogRef = this.dialog.open(ScriptRecordComponent, {
      width: '50%',
      maxWidth: '100vw',
      maxHeight: '100vh',
    });

    const smallDialogSubscription = this.isExtraSmall.subscribe(size => {
      if (size.matches) {
        dialogRef.updateSize('100%', '100%');
      } else {
        dialogRef.updateSize('50%');
      }
    });

    dialogRef.afterClosed().subscribe(
      (result) => {
        smallDialogSubscription.unsubscribe();
        if (result && result.status === 'success') {

        } else {

        }
      }
    );
  }

  dropText(evt) {
    var data = evt.dataTransfer.getData("Text");
    console.log(data);

  }


}
