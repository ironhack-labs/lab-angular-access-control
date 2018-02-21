import { Component, OnInit, Input } from '@angular/core';

import { AccessControlLogService }  from '../../services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  @Input() logMessages: Array<object> = [];

  feedbackEnabled = false;
  processing = false;
  
  

  constructor(private accessControl: AccessControlLogService) {
   }

  ngOnInit() {
  }


  addPerson(form){
    if(form.valid) {
    this.feedbackEnabled = false; 
    this.logMessages = [];
    }else {
      this.feedbackEnabled = true;
    }
  }

  addAccessItems(person, name){
    this.logMessages.push(person, name)
  }


}
