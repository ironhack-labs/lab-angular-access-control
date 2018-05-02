import { Component, OnInit } from '@angular/core';
import { AccessLogService } from '../access-log.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessLogService]
})
export class LogFormComponentComponent implements OnInit {

  constructor(private AccessLog: AccessLogService) { }

  ngOnInit() {
  }

  submitForm(myForm) {
    const person = myForm.value.person;
    const message = myForm.value.message;
    this.AccessLog.addAccessItem(person, message);
  }
}
