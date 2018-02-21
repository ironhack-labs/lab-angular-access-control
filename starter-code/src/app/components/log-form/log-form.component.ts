import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  feedbackEnabled = false;
  processing = false; 
  formSendCorrectly = false;

  person : string = '';
  message : string = '';

  constructor(private accessControlLogService: AccessControlLogService) { }

  ngOnInit() {
  }

  handleClick(form) {
    if (form.valid) {
      this.person = form.value.person;
      this.message = form.value.message;
      this.accessControlLogService.addAccessItem(this.person, this.message);
      this.formSendCorrectly = true;
      
    } else {
      this.formSendCorrectly = false;
      this.feedbackEnabled = true;
    }
  }

}
