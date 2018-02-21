import { Component, OnInit } from '@angular/core';
import {AccessControlLogService} from '../../services/access-control-log.service';



@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {

  
  person: String;
  message: String;
  feedbackEnabled = false
  
 

  constructor(private AccessControlLogService: AccessControlLogService) { 
    this.person = null;
    this.message = null;

  }

  ngOnInit() {
  }

  addAcces(person, message){
    this.AccessControlLogService.addAccessItem(person, message);
    this.person = null;
    this.message = null;
  }

  submitForm(form) {
    this.feedbackEnabled = true;
    if (form.valid) {
      
      console.log('here we submit the form', form);
      this.addAcces(this.person, this.message);
    }
  }


}
