import { Component, OnInit } from '@angular/core';
import { AccessLogsService } from '../my-services/access-logs.service';
@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  theAccessLog: any = {};

  constructor(private accessThing: AccessLogsService) { }

  ngOnInit() {
  }

  logSubmit() {
    alert('Success')
    this.accessThing.addAccessItem(this.theAccessLog);
    this.theAccessLog = {};
  }



}
