import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from 'services/access.services';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLog]
})
export class LogFormComponent implements OnInit {

  constructor(public aclS: AccessControlLog) { 
  }

  ngOnInit() {
  }

  subido = false
  submitForm(myForm) {
    console.log(this.aclS.logMessages);
    this.subido = true;
  }

  

}
