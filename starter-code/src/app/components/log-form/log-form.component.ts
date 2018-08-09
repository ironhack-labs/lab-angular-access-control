import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  title = "Locker Log";
  feedbackEnabled = false;
  error = null;
  processing = false;
  lockerLog;

  newLog = {
    person: '',
    message: '',
    createdAt: Date.now(),
  }

  constructor(
    private accessControl: AccessControlLogService  
  ) { }


  ngOnInit() {
    this.lockerLog = this.accessControl.getAccessLog();
    console.log(this.lockerLog);
  }
  submitForm(form){
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.accessControl.addAccessItem(this.newLog);
      this.newLog = {
        person: '',
        message: '',
        createdAt: Date.now(),
      }
      this.feedbackEnabled = false;
      this.error = null;
      this.processing = false;
    }
  }

}
