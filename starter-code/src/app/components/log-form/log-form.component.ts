import { Component, OnInit } from '@angular/core';
import { AccessLogService } from '../../services/access-log.service';



@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessLogService]
})
export class LogFormComponent implements OnInit {

  accessLog = this.accessService.accessLog;

  constructor(private accessService: AccessLogService) { }

  ngOnInit() {
  }

  submitForm(any) {
    console.log(any.value);
  }
}
