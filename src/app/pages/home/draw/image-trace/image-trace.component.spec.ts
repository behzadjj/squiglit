import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTraceComponent } from './image-trace.component';

describe('ImageTraceComponent', () => {
  let component: ImageTraceComponent;
  let fixture: ComponentFixture<ImageTraceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageTraceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
