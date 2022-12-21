import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiProjectItemComponent } from './ui-project-item.component';

describe('UiProjectItemComponent', () => {
  let component: UiProjectItemComponent;
  let fixture: ComponentFixture<UiProjectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiProjectItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiProjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
