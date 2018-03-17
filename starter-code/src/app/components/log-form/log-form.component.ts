import { Component, OnInit, OnChanges } from '@angular/core';
import { AccessLogService } from '../../services/access-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessLogService],
})
export class LogFormComponent implements OnInit {
  log: Array<any>
  success: boolean;
  constructor(private accessLog: AccessLogService) { }

  ngOnInit() {
    this.log = this.accessLog.getAccessLog();
  }

  ngOnChanges() {
    this.log = this.accessLog.getAccessLog();
  }

  submitForm(myForm) {
    const access = myForm.value;
    this.accessLog.addAccessItem(access);
    this.success = !this.success;
    this.log.forEach(e => {
      console.log(e)
    })
  }
}
