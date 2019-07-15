import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormHelperComponent } from './dynamic-form-helper.component';

describe('DynamicFormHelperComponent', () => {
  let component: DynamicFormHelperComponent;
  let fixture: ComponentFixture<DynamicFormHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
