/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogFormComponentComponent } from './log-form-component.component';

describe('LogFormComponentComponent', () => {
  let component: LogFormComponentComponent;
  let fixture: ComponentFixture<LogFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
