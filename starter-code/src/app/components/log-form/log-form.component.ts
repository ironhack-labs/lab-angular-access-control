import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  accessControlLog: AccessControlLogService;
  person: String = '';
  message: String = '';
  logMessage: Boolean = false;

  constructor() {
    this.accessControlLog = new AccessControlLogService;
  }

  ngOnInit() {
  }

  handleAddItem() {
    this.accessControlLog.addAccessItem(this.person, this.message);
    return this.logMessage = true;

  }
}
