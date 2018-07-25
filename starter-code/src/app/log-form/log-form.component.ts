import { Component, OnInit } from '@angular/core';
import { ControlLogService } from 'services/accessControlLog.service'

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  constructor(public servicio: ControlLogService) { }

  ngOnInit() {
  }

}
