import { Component, OnInit } from '@angular/core';
import { AccessLogService } from '../access-log.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {

  constructor(private myService: AccessLogService) { }

  logMessages: Array<Object> = [];
  newLogMessage: Object = {};
  ngOnInit() {
  }

  addAccessItem() {
    this.logMessages.push(this.newLogMessage);
    this.newLogMessage = {};
  }

}
