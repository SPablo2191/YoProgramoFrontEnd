import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiWorkCarouselComponent } from './ui-work-carousel.component';

describe('UiWorkCarouselComponent', () => {
  let component: UiWorkCarouselComponent;
  let fixture: ComponentFixture<UiWorkCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiWorkCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiWorkCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
