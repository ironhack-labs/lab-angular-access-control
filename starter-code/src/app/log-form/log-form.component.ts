import { Component, OnInit } from '@angular/core';
import {AccessControlLogService} from '../access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService],
})
export class LogFormComponent implements OnInit {

  constructor(public service: AccessControlLogService) { }
  ngOnInit() {

  }

  regist(form){
    this.service.addRegister(form.value.person,form.value.message);
    alert(this.service.getRegister());
    this.service.getLast();
  }
}
