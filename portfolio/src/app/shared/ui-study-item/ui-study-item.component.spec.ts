import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiStudyItemComponent } from './ui-study-item.component';

describe('UiStudyItemComponent', () => {
  let component: UiStudyItemComponent;
  let fixture: ComponentFixture<UiStudyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiStudyItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiStudyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
