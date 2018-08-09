import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogFromComponent } from './log-from.component';

describe('LogFromComponent', () => {
  let component: LogFromComponent;
  let fixture: ComponentFixture<LogFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
