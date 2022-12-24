import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiProjectCarouselComponent } from './ui-project-carousel.component';

describe('UiProjectCarouselComponent', () => {
  let component: UiProjectCarouselComponent;
  let fixture: ComponentFixture<UiProjectCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiProjectCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiProjectCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
