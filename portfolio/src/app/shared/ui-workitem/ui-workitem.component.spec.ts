import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiWorkitemComponent } from './ui-workitem.component';

describe('UiWorkitemComponent', () => {
  let component: UiWorkitemComponent;
  let fixture: ComponentFixture<UiWorkitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiWorkitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiWorkitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
