import { Component, OnInit } from '@angular/core';
import {AccessControlLogService} from "../access-control-log.service";

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponentComponent implements OnInit {

  person:string;
  message:string;
  saved: boolean;

  constructor(private accessLog: AccessControlLogService) { }

  ngOnInit() {
  }

  addItem() {
    this.accessLog.addAccessItem(this.person, this.message);
    this.saved = true;
  }
}
