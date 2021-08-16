import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindCardComponent } from './maind-card.component';

describe('MaindCardComponent', () => {
  let component: MaindCardComponent;
  let fixture: ComponentFixture<MaindCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaindCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
