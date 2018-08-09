import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access-control-log.service';


@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  messageInfo = '';

  constructor(private accessControlLogService: AccessControlLogService) { }

  ngOnInit() {
  }

  logUser(person, message) {
    this.accessControlLogService.addAccessItem(person, message);
    this.messageInfo = this.accessControlLogService.successfullMessage;
  }

  console(a) {
    console.log(a)
  }

}
