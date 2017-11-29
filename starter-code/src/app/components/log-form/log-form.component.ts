import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access-control-log.service';
import { setTimeout } from 'timers';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  newLog: object = this.theAccessControl;
  person: string;
  message: string;

  submitted = false;
  feedbackEnabled = false;

  constructor(public theAccessControl: AccessControlLogService) {  }

  ngOnInit() {
  }

  submitForm(myForm) {
    if (myForm.valid) {
      this.theAccessControl.addAccessItem(this.person, this.message);
      this.person = null;
      this.message = null;
      this.submitted = true;
      this.feedbackEnabled = false;
      setTimeout(() => {
        this.submitted = false;
      }, 2000);
      this.theAccessControl.getAccessLog();
    } else {
      this.feedbackEnabled = true;
      setTimeout(() => {
        this.feedbackEnabled = false;
        this.person = null;
      }, 2000);
      // this.message = null;
    }
  }

}
