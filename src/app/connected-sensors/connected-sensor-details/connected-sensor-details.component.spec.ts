import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedSensorDetailsComponent } from './connected-sensor-details.component';

describe('ConnectedSensorDetailsComponent', () => {
  let component: ConnectedSensorDetailsComponent;
  let fixture: ComponentFixture<ConnectedSensorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectedSensorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedSensorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
