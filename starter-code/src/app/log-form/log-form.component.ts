import { Component, OnInit, Input } from '@angular/core';
import { AccessLogService } from '../services/access-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  @Input() logMessages: any;

  logInfo: any = {};

  constructor(private messageThang: AccessLogService) { }

  ngOnInit() {
  }

  messageSubmit() {
    this.messageThang.addAccessItem(this.logInfo);
    console.log(this.logInfo);

  }

}
