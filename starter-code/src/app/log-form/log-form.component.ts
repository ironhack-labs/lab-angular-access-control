import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../access-control-log.service'

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponent implements OnInit {
  newLog = {
    person: '',
    message: '',
    createdAt: new Date()
  }
  constructor(private theSubmit: AccessControlLogService) {}

  ngOnInit() {
  }

  submitForm(logForm) {
    // console.log(this.newLog);
    this.theSubmit.addAccessItem(this.newLog);

}
}
