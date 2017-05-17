import { Component, OnInit } from '@angular/core';
import {AccessControlLogService} from '../access-control-log.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponentComponent implements OnInit {

  submitForm(form) {

    if (form.valid) {//if statement for avoiding sending empty objects with the form
      this.accessLog.addAccessItem(form.value.person, form.value.message);
    }

  }
  constructor(private accessLog: AccessControlLogService) { }

  ngOnInit() {
  }

}
