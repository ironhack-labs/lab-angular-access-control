import { Component, OnInit } from '@angular/core';
import {AccessControlLog} from '../services/access.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  constructor(private accessLog:AccessControlLog) {
  }

  ngOnInit() {
  }

  submitForm(myForm) {
    this.accessLog.addAccessItem(myForm.value.person, myForm.value.message);
    console.log(myForm);
    myForm.reset();
    console.log(myForm);
    console.log(this.accessLog.getAccessLog());
  }

}
