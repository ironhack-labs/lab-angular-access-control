import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from 'services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponent implements OnInit {
  person:String = "";
  message:String = "";

  constructor(public controlLog:AccessControlLogService) { }

  ngOnInit() {
  }

}
