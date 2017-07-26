import { Component, OnInit } from '@angular/core';
import { AccessControlLogService, Player } from '../../services/access-control-log.service'

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService],

})
export class LogFormComponent implements OnInit {
  logMessages:Array<Player> = []

  constructor(public service:AccessControlLogService) { }

  ngOnInit() {}

  submitForm(myForm) {
    this.service.addAccessItem(myForm.form._value.person, myForm.form._value.message)
    this.logMessages = this.service.getAccessLog()
    console.log(this.logMessages)
  }

}
