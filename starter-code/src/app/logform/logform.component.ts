import { Component, OnInit } from '@angular/core';
import { AccessLogService } from 'sevices/log.sevice';

@Component({
  selector: 'app-logform',
  templateUrl: './logform.component.html',
  styleUrls: ['./logform.component.css']
})
export class LogformComponent implements OnInit {

  constructor(public AccessControlLog: AccessLogService) { }

  ngOnInit() {
  }

  submitForm(myForm){
    this.AccessControlLog.addAcccessItem(myForm.value.person, myForm.value.message);
    this.AccessControlLog.getAccessLog();
  }
}
