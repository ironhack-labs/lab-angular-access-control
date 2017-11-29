import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../../services/access-control-log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLog]
})
export class LogFormComponent implements OnInit {

  constructor(public accessControl: AccessControlLog) { }

  ngOnInit() {
  }

  submitForm(myForm) {
    console.log(myForm);
    this.accessControl.addAccessItem(myForm.form.value.person, myForm.form.value.message);
    myForm = {}; // no funciona :(
  }

}
