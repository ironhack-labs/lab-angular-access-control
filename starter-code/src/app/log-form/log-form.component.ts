import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../access-control-log.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService],
})
export class LogFormComponent implements OnInit {

  constructor(public controlLog: AccessControlLogService) { }

  ngOnInit() {
  }

  addLog(person, message){
    this.controlLog.addAccessItem(person, message);
    console.log(this.controlLog.getAccessLog());
    person.reset();
    message.reset();
  }


}
