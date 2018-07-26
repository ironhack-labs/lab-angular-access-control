import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  logMessages: Array<any>

  constructor(private service: AccessControlLogService) { }

  submitForm(form) {
    console.log(form.value);
    this.logMessages.push(form.value);
    console.log(this.logMessages);
  
  }

  ngOnInit() {
    this.logMessages = this.service.getAccessLog();
  }

}
