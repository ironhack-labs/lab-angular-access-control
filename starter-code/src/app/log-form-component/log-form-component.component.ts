import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/access.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessControlLog]
})
export class LogFormComponentComponent implements OnInit {

  constructor(private accessLog: AccessControlLog) { }

  ngOnInit() {
  }

  addItem(myForm) {
    this.accessLog.addAccessItem(myForm.value.person, myForm.value.message)
  }

  addLog() {
    this.accessLog.getAccessLog()
  }

}
