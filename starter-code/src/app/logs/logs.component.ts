import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from  '../my-services/access-control-log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  newItem = {};
  theList = this.theAccess.logMessages;
  constructor(private theAccess: AccessControlLogService) { }

  ngOnInit() {
  }

  addThis() {
    this.theAccess.addAccessItem(this.newItem);
  }

}
