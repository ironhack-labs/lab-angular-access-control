import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/accessControlLog.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService],
})
export class LogFormComponent implements OnInit {

  constructor(public accessLog : AccessControlLogService) { }

  ngOnInit() {
  }

  submitForm(myForm) {
    this.accessLog.addAccessItem(myForm.controls.person.value, myForm.controls.message.value);
    console.log(this.accessLog.getAccessLog());
    myForm.reset();
  }

}
