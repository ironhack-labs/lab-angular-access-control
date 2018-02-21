import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from 'app/services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  feedbackEnabled = false;
  processing = false;
  person = null;
  message = null;
  AccessControlLog: AccessControlLogService;
  display: boolean = false;

  constructor(AccessControlLog: AccessControlLogService) {
    this.AccessControlLog = AccessControlLog;
   }

  ngOnInit() {
  }

  handleAccessItem(){
    this.display = true;
    this.AccessControlLog.addAccessItem('a', 'b');
  }

  submitForm(form) {
    this.feedbackEnabled = true;
    if (form.valid) {

      console.log('here we submit the form');
    }
  }

}
