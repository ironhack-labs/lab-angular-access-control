import { Component, OnInit } from '@angular/core';
import { AccessService } from '../../services/access.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  submitted = false;
  showSubmitMessage = false;


  constructor(private access: AccessService) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    this.submitted = false;
    this.showSubmitMessage = false;
    if (form.valid) {
      this.processing = true;
      this.showSubmitMessage = true;
      if (this.access.addAccessItem(form.value.person, form.value.message)) {
        this.submitted = true;
        this.showLog();
      };
      this.resetForm(form);
      //console.log(form);
    }
  }

  resetForm(form) {
    this.processing = false;
    if (this.submitted) {
      form.resetForm();
      this.feedbackEnabled = false;
    }
  }

  showLog() {
    const listLog = this.access.getAccesLog();
    listLog.forEach(log => {
      console.log('Person:', log.person);
      console.log('Message:', log.message);
      console.log('Creation date:', log.createdAt);
    })
  }

}
