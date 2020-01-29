import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptRecordComponent } from './script-record.component';

describe('ScriptRecordComponent', () => {
  let component: ScriptRecordComponent;
  let fixture: ComponentFixture<ScriptRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
