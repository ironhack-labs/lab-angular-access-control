import { AccessControlLog } from './../../shared/services/AccessControlLog.service';
import { Component, OnInit } from '@angular/core';
import { Access } from '../../shared/models/access.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [
    AccessControlLog
  ]
})
export class LogFormComponent implements OnInit {
  access = new Access();
  result;

  constructor(private accessControlLog: AccessControlLog) { }

  ngOnInit() {
  }

  onSubmitAccessForm() {
    this.accessControlLog.addAccessItem(this.access.person, this.access.message);
    this.result = `Person: ${this.access.person} and message: ${this.access.message} created`;
    this.accessControlLog.showLogsOnConsole();
  }

}
