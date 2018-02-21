import { Component, OnInit } from '@angular/core';
import {AccessControlService} from '../../services/access-control.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlService]
})
export class LogFormComponent implements OnInit {

  person: string;
  message: string;
  feedbackEnabled: boolean = false;
  processing: boolean = false;
  success: boolean;

  constructor(public accessControl: AccessControlService) { }
    
  ngOnInit() {
  }

  submitMessage(form){

    if(form.valid){
      this.success = false;
      this.processing = true;
      this.feedbackEnabled = false;
      this.accessControl.addAccessItem(this.person, this.message);
      this.processing = false;
      this.success = true;
    } else {
      this.feedbackEnabled = true;
    }
  }

}
