import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempHistoryComponent } from './temp-history.component';

describe('TempHistoryComponent', () => {
  let component: TempHistoryComponent;
  let fixture: ComponentFixture<TempHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
