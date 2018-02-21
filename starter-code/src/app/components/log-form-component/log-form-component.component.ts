import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access-control-log.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {
  person: string;
  message: string;
  added = false;
  feedbackEnabled = false;

  constructor(private controlLog : AccessControlLogService) { 
  }

  ngOnInit() {
  }

  handleAddAccess(form) {
    if (form.valid) {
      this.added = true;
      this.controlLog.addAccesItem(this.person, this.message);
      this.feedbackEnabled = false;
    } else {
      this.feedbackEnabled = true;
    }

  }

}
