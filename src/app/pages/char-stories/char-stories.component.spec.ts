import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharStoriesComponent } from './char-stories.component';

describe('CharStoriesComponent', () => {
  let component: CharStoriesComponent;
  let fixture: ComponentFixture<CharStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
