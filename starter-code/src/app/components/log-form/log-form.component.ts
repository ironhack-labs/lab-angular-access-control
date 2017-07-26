import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/access.services';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLog],
})
export class LogFormComponent implements OnInit {

  registration: string;
  loggedObject: Array<Object>;

  constructor(private logController: AccessControlLog) { }

  ngOnInit() {
  }

  submitForm(myForm) {
    console.log("FORM:", myForm.value);
    this.logController.addAccessItem(myForm.value.person, myForm.value.message);
    this.logRegister();
  }

  logRegister() {
    let listLogs = this.logController.getAccessLog();
    console.log(JSON.stringify(listLogs));
    if (listLogs.length > 0) {
      this.registration = 'registration succesful';
    }
    this.loggedObject = listLogs;
  }

}
