import { Component, OnInit } from '@angular/core';
import { LogformServiceService } from '../logform-service.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [LogformServiceService]
})
export class LogFormComponent implements OnInit {

  constructor(private theLog: LogformServiceService) { }

  ngOnInit() {
  }
  add(person, message){
    this.theLog.addAccessItem(person, message);
  }
}
