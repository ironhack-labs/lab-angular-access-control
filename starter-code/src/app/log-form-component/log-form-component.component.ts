import { Component, OnInit } from '@angular/core';
import { AccessLogService } from '../access-log.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessLogService]
})
export class LogFormComponentComponent implements OnInit {

  constructor(private myService: AccessLogService) { }
    newLogMessage = {};

  ngOnInit() {

  }

  addAccessItems (user) {
    const newLogMessage = {
      person: user.person,
      message: user.message
    }
    this.myService.addAccessItem(newLogMessage.person, newLogMessage.message);
    console.log(this.myService);
  }
}
