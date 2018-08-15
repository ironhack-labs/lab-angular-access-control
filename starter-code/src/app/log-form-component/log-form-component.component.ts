import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../access-control-log.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponentComponent implements OnInit {
  display: string;
  constructor(private theAccessControl: AccessControlLogService) { }

  ngOnInit() {
  }
  
  addAccessItem(per,msg){
    this.theAccessControl.addAccessItem(per,msg);
    this.display = "true";
    let allLogMessages = this.theAccessControl.getAccessLog();
    let logMessagesLength = allLogMessages.length;
    // console.log(allLogMessages);
    console.log(logMessagesLength);
    for( let i=1; i<=logMessagesLength; i++){
      console.log(allLogMessages[i]);
    }
  }
}
