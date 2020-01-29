import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceSelectComponent } from './voice-select.component';

describe('VoiceSelectComponent', () => {
  let component: VoiceSelectComponent;
  let fixture: ComponentFixture<VoiceSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
