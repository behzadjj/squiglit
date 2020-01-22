import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerpointComponent } from './powerpoint.component';

describe('PowerpointComponent', () => {
  let component: PowerpointComponent;
  let fixture: ComponentFixture<PowerpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
