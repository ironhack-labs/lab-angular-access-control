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

  constructor(
    private accessService: AccessService
  ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
    }
    console.log(form);
    this.accessService.addAccessItem(form.value.person, form.value.message);
  }


}
