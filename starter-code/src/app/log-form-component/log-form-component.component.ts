import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/AccessControlLog.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessControlLog]
})
export class LogFormComponentComponent implements OnInit {
  person:string;
  message:string;
  constructor(private accessLog: AccessControlLog) { }

  ngOnInit() {
  }

  saveLog(){
    this.accessLog.addAccessItem(this.person, this.message)
  }
}
