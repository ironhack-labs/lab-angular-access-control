import { Component, OnInit } from '@angular/core';

import { AccessControlLogService } from '../services/access-control-log.service';



@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  newLogMessage: any = {};

  constructor(private accessThing: AccessControlLogService) { }

  ngOnInit() {
  }

  logSubmit(myEvent) {
      this.accessThing.addAccessItem(this.newLogMessage);
      this.newLogMessage.push = {};
      alert("New Access Log Entry Added!");
      // console.log(getAccessLog());

  }



}
