import { Component, OnInit } from '@angular/core';
import { AccessLogService } from '../access-log.service'; 

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessLogService]
})
export class LogFormComponent implements OnInit {

  constructor(private logService: AccessLogService) {}

  isSuccess: boolean = false


  ngOnInit() {
  }

  addToLog(form){
    this.logService.addAccessItem(form);
    this.isSuccess = true;
  }


}
