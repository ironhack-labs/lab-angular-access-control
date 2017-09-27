import { Component, OnInit } from '@angular/core';
import { AccessLogService } from '../services/access-log.service'

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessLogService]
})
export class LogFormComponent implements OnInit {
  success:boolean = false;
  constructor(private accessControl: AccessLogService) { }

  ngOnInit() {
  }

  addAccessItem(myForm){
    this.success = true;
    this.accessControl.addAccessItem(myForm);
    console.log(this.accessControl.getAccessLog())
  }
}
