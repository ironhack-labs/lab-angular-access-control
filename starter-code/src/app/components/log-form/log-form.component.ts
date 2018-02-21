import { Component, OnInit } from '@angular/core';

import { AccessControlLogService } from '../../services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  person: String;
  message: String;
  feedbackEnabled: Boolean = false;
  successMessage: Boolean = false;
  processing: Boolean = false;
  constructor(private accessControl: AccessControlLogService) {}

  ngOnInit() {}

  logAccess(form) {
    if (form.valid) {
      this.successMessage = true;
      this.accessControl.addAccessItem(this.person, this.message);
      this.feedbackEnabled = false;
      this.processing = true;
      this.accessControl.getAccessLog().forEach(access => {
        console.log(`The user ${access.person} access at ${access.createdAt} with the message ${access.message}`);
      });
      setTimeout(() => {
        this.successMessage = false;
        this.processing = false;
        this.message = '';
        this.person = '';
      }, 1500);
    } else {
      this.feedbackEnabled = true;
    }
  }
}
