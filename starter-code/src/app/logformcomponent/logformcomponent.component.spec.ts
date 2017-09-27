import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogformcomponentComponent } from './logformcomponent.component';

describe('LogformcomponentComponent', () => {
  let component: LogformcomponentComponent;
  let fixture: ComponentFixture<LogformcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogformcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogformcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
