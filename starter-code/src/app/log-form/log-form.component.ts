import { Component, OnInit } from '@angular/core';
import {AccessControlLog} from '../services/AccessControlLog.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],

  providers: [AccessControlLog]
})
export class LogFormComponent implements OnInit {

  constructor(public accessControlLog: AccessControlLog) { }

  ngOnInit() {
  }

  submitForm(myForm){
    let user= myForm.value.username;
    let mess=myForm.value.message;

    this.accessControlLog.addRegister(user, mess);
  
  }


}
