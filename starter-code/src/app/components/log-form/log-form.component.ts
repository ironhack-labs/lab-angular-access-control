import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  newLog: Object = this.theAccessLog;
  person: String;
  message: String;
  feebackEnabled = false;
  reply = false;

  constructor(public theAccessLog: AccessControlLogService) { }

  ngOnInit() {
  }

  submitForm(theForm) {
    if(theForm.valid){
      this.feebackEnabled = false;
      this.reply = true;
      this.theAccessLog.addAccessItem(this.person, this.message);
      this.theAccessLog.getAccessLog();
      this.person = null;
      this.message = null;
      setTimeout(() => {
        this.reply = false;
      }, 800 );
    } else {
      this.feebackEnabled = true;
    }
  }
}
