import { Component, OnInit } from '@angular/core';
import { AccessLog } from '../services/AccessControlLog.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessLog]
})
export class LogFormComponent implements OnInit {
  person: string;
  message: string;
  successful: boolean = false;
  constructor(private theAccessLog : AccessLog) { }

  ngOnInit() {
  }

  accessLog() {
    this.theAccessLog.addAccessTime (this.person, this.message);
    this.successful = true;
  }

}
