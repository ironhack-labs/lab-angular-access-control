import { Component, OnInit } from '@angular/core';
import {LockerRoomTalkService} from '../../services/locker-room-talk.service';
import { LockerRoomTalk } from '../../models/lockerroomtalk'

@Component({
  selector: 'app-locker-room-talk-form',
  templateUrl: './locker-room-talk-form.component.html',
  styleUrls: ['./locker-room-talk-form.component.css']
})
export class LockerRoomTalkFormComponent implements OnInit {
  newLockerRoomTalk: LockerRoomTalk;
  

  constructor() { }

  ngOnInit() {}
  
  submitForm(myForm){
    console.log(myForm);
    this.newLockerRoomTalk.person = myForm.value.person;
    this.newLockerRoomTalk.message = myForm.value.message;
    this.newLockerRoomTalk.createdAt = new Date();
  }

}
