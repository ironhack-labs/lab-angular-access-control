import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponent implements OnInit {

  constructor(public controlLog: AccessControlLogService) {}

  ngOnInit() {
  }

  submitForm(myForm) {
    this.controlLog.addAccessItem(myForm.value.person, myForm.value.message);
    this.controlLog.getAccessLog().forEach(log => {
      console.log(log);
    });
  }

}
