import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  variable: any;
  feedbackEnabled = false;
  error = null;
  processing = false;
  arrayOfPersons = [];

  constructor(private accessControlLogService: AccessControlLogService) { }

  ngOnInit() {
    
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.arrayOfPersons = this.accessControlLogService.getAccessLog();
      for (let ix = 0 ; ix <= this.arrayOfPersons.length - 1; ix++) {
        console.log('Person:', this.arrayOfPersons[ix].person, 'Message:', this.arrayOfPersons[ix].message, 'Date:', this.arrayOfPersons[ix].date);
      }
    }
  }
}
