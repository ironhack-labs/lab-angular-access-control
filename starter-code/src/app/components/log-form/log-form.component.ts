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
  submitted = false;

  constructor(private accessService: AccessLogService) { }

  ngOnInit() {
  }

  submitForm(any) {
    this.accessService.addAccessItem(any.value.person, any.value.message);
    this.submitted = true;
    console.log(this.accessLog);
    setTimeout(() => { this.submitted = false; }, 1000);
  }


}
