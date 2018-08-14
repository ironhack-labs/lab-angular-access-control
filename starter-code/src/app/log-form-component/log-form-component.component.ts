import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../access-control-log.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponentComponent implements OnInit {

  constructor(private theAccessControl: AccessControlLogService) { }

  ngOnInit() {
  }
  
  addAccessItem(person,message){
    this.theAccessControl.addAccessItem(person,message);
    let allLogMessages = this.theAccessControl.getAccessLog();
    let logMessagesLength = allLogMessages.length;
    console.log(allLogMessages);
    console.log(logMessagesLength);
    for( let i=0; i<logMessagesLength; i++){
      console.log(allLogMessages[i]);
    }
    // console.log(this.theAccessControl.getAccessLog());
  }
}
