import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from './../services/access-control-log.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponent {

  constructor(private accessControlLog: AccessControlLogService) { }

  // log(person){console.log(person);}
  
  logMessages = this.accessControlLog.getAccessLog();

  // HARD PART!!
  addAccess(myForm){
    this.accessControlLog.addAccessItem(myForm);
    console.log( ...this.logMessages); //accessControlLog.getAccessLog()
  }
}
