import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mainCardComponent } from './main-card.component';

describe('mainCardComponent', () => {
  let component: mainCardComponent;
  let fixture: ComponentFixture<mainCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ mainCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(mainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
