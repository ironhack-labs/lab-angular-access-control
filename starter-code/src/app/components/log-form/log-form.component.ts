import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access-control-log.service';
import { DatePipe } from '@angular/common';
import { LogMessage } from '../../models/logMessage';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  newLog = new LogMessage();
  feebackEnabled = false;
  reply = false;

  constructor(public theAccessLog: AccessControlLogService) { }

  ngOnInit() {
  }

  submitForm(theForm) {
    if(theForm.valid){
      this.feebackEnabled = false;
      this.reply = true;
      this.theAccessLog.addAccessItem(this.newLog);
      this.theAccessLog.getAccessLog();
      setTimeout(() => {
        this.reply = false;
      }, 800 );
    } else {
      this.feebackEnabled = true;
    }
  }
}
