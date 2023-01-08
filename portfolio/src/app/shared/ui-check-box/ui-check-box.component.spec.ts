import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCheckBoxComponent } from './ui-check-box.component';

describe('UiCheckBoxComponent', () => {
  let component: UiCheckBoxComponent;
  let fixture: ComponentFixture<UiCheckBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiCheckBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
