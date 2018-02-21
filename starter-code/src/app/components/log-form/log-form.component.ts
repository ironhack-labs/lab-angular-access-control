import { Component, OnInit } from '@angular/core';

import { AccesControlService  } from "../../services/acces-control.service";


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


  constructor(private access: AccesControlService) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      console.log('here we submit the form');
      this.access.addAccessItem(this.person, this.message);
      // authService.login(this.username, this.password).
    }
  }
}





 

 