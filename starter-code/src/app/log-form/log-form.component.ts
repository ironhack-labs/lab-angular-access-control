import { Component, OnInit } from '@angular/core';
import { Log } from '../models/log';
import { AccessLogService } from '../service/access-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  new: Log;
  showMessage: boolean;
  messageContent: string;
  constructor( private accessLog: AccessLogService ) { }
  ngOnInit() {
    this.showMessage = false;
    this.new = { person: '', message: '', createdAt: new Date() };
  }

  initMessage(content) {
      this.messageContent = content;
      this.showMessage = true;

      setTimeout(() => {
          this.showMessage = false;
      }, 1200);

  }
  addAccessItem() {
      if ( this.new.person !== '' || this.new.message !== '' ) {
        this.accessLog.addAccessItem(this.new.person, this.new.message);
        this.initMessage('You item has been added.');
        this.new = { person: '', message: '', createdAt: new Date() };
      }else {
        this.initMessage('All fields are required before proceeding.');
      }
  }
}
