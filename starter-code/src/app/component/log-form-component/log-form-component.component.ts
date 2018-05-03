import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access-control-log.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {
  feedbackEnabled = false;
  error = null;
  processing = false;
  name: string;
  message: string;

  constructor(private accessControlLogService: AccessControlLogService) {}

  ngOnInit() {}

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.accessControlLogService.addAccessItem(this.name, this.message);
      this.processing = true;
      setTimeout(() => {
        this.feedbackEnabled = false;
        this.processing = false;
        this.name = '';
        this.message = '';
      }, 1500);
    } else {
      this.processing = false;
      };
    }
}
