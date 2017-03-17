import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../access-control-log.service'

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponent implements OnInit {

  constructor(private theLog: AccessControlLogService) {
  }

  ngOnInit() {
  }

}
