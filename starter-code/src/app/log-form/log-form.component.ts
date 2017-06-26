import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AccessLogService } from '../access-log.service'

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  constructor(
    private myService: AccessLogService
  ) { }

  accessLog: Object[] = this.myService.accessLog;

  ngOnInit() {
    this.getAccessLog();
  }

  addAccessItem(person, message) {
    this.myService.addAccessItem(person, message)
    this.getAccessLog();
  }

  getAccessLog() {
    this.myService.getAccessLog()
    this.accessLog.forEach((log) => {
      console.log(log);
    })
  }

}
