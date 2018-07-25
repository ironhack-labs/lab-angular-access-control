import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from 'services/AccessControlLogService.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponent implements OnInit {

  constructor(public accessService: AccessControlLogService) {}

  ngOnInit() {
  }

}
