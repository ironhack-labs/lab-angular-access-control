import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessControlLogComponent } from './access-control-log.component';

describe('AccessControlLogComponent', () => {
  let component: AccessControlLogComponent;
  let fixture: ComponentFixture<AccessControlLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessControlLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessControlLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
