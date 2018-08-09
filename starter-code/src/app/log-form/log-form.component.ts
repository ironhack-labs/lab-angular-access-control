import { Component, OnInit } from '@angular/core';
import { AccessLogService } from '../services/access-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  accessItem: Object;
  successMessage: String;
  constructor(private accessLog: AccessLogService) { }

  ngOnInit() {
  }

  // addAccessItem(form){
  //   console.log(form)
  // }
  
  addAccessItem(form){
    this.accessLog.addAccessItem(form.value.person, form.value.message)
    this.successMessage = 'You\'ve successfully submitted your reason!';
  }

}
