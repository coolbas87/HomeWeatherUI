import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedSensorComponent } from './connected-sensor.component';

describe('ConnectedSensorComponent', () => {
  let component: ConnectedSensorComponent;
  let fixture: ComponentFixture<ConnectedSensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectedSensorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
