import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access-control-log.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {
  error: string = "";
  feedbackEnabled: boolean = false;
  processing: boolean = false;
  access: Object = {};
  personName: string = "";
  list: Array<Object> = [];
  logQtty: Number = 0;

  constructor(private accessLog: AccessControlLogService) { }

  ngOnInit() {
  
  }

  getFullList() {
    this.list = this.accessLog.getAccessLog()
    console.log(this.list.length)
    this.logQtty = this.list.length;
  }

  submitForm(form) {
    console.log(form);
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.personName = this.accessLog.addAccessItem(form.controls.person.value, form.controls.message.value)
    }
  }
}
