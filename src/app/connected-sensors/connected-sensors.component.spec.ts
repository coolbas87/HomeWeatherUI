import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedSensorsComponent } from './connected-sensors.component';

describe('ConnectedSensorsComponent', () => {
  let component: ConnectedSensorsComponent;
  let fixture: ComponentFixture<ConnectedSensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectedSensorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
