import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../service/access-control-log.service'


@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponent implements OnInit {
  logMessages:Array<Object> = []

  constructor(public logea:AccessControlLogService) { }

  ngOnInit() {
  }
  submitForm(myForm){
    console.log(myForm.form.value)
    this.logea.addAccessItem(myForm.form._value.person, myForm.form._value.message)
    this.logMessages = this.logea.getAccessLog();
    console.log(this.logMessages)
  }
}
