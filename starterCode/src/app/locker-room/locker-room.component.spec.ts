import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerRoomComponent } from './locker-room.component';

describe('LockerRoomComponent', () => {
  let component: LockerRoomComponent;
  let fixture: ComponentFixture<LockerRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockerRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
