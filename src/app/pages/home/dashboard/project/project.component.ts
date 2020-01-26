import { Component, OnInit, Directive, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AccessibleService } from 'src/app/service/accessible/accessible.service';
import { LanguagePipe } from 'src/app/pipe/language/language.pipe';

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
    private language: LanguagePipe
  ) { }

  projectInfo: ProjectInfo = {} as ProjectInfo;

  projectInfoLock = false;

  form;

  ngOnInit() {

    // const form = new FormGroup({
    //   first: new FormControl('first name'),
    //   last: new FormControl('last name')
    // });
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


}
