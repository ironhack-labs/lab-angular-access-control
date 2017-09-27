import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySignupFormComponent } from './my-signup-form.component';

describe('MySignupFormComponent', () => {
  let component: MySignupFormComponent;
  let fixture: ComponentFixture<MySignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
