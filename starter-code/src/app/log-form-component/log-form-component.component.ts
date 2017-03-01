import { Component, OnInit } from '@angular/core';
import {AccessControlLog} from '../services/register.service';
import {Log } from '../models/log';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessControlLog],
})


export class LogFormComponentComponent implements OnInit {

  log: Log;
  placeholder : Log = new Log('person','message');

  constructor(public accessControlLog: AccessControlLog) {}

  ngOnInit() {
    this.log = new Log;
    this.accessControlLog = new AccessControlLog;
       }

  addLogToRegister(){
    this.accessControlLog.addRegister(this.log.person, this.log.message);
    this.accessControlLog.getRegisters();
       }

}
