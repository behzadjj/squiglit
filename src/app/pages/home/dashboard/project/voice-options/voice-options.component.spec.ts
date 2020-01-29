import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceOptionsComponent } from './voice-options.component';

describe('VoiceOptionsComponent', () => {
  let component: VoiceOptionsComponent;
  let fixture: ComponentFixture<VoiceOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
