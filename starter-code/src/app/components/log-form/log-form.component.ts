import { Component, OnInit } from '@angular/core';
import {AccessControlLogService} from "../../services/access-control-log.service";

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [ AccessControlLogService]
})
export class LogFormComponent implements OnInit {

  constructor(private accessControlLog: AccessControlLogService) { }

  ngOnInit() {
  }
  
  submitForm(logIn){
    console.log(logIn.value.person);
    this.accessControlLog.addAccessItem(logIn.value.person, logIn.value.message);
  }

}
