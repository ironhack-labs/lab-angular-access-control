import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../services/access.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponent implements OnInit {
  p = '';
  m = '';
  success = '';
  constructor(private theAccess: AccessControlLogService) { }

  ngOnInit() {
  }

  addAccess() {
    if (this.p.length > 0 || this.m.length > 0) {
      this.theAccess.addAccessItem(this.p, this.m);
      this.theAccess.logMessages.forEach(entry => {
        console.log(`Person:  ${entry.person} Message: ${entry.message} Created at: ${entry.createdAt}`)
      });
      this.success = 'Registration was successful';
    }
  }
}
