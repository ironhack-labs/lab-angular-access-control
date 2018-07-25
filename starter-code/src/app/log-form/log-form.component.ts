import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from 'services/AccessControlLog.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  constructor(public service: AccessControlLog) { }

  ngOnInit() {
  }

}
