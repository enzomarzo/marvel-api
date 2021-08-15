import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgHeroComponent } from './img-hero.component';

describe('ImgHeroComponent', () => {
  let component: ImgHeroComponent;
  let fixture: ComponentFixture<ImgHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
