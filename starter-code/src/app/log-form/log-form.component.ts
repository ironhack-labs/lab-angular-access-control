import { Component, OnInit } from '@angular/core';
import { LogRegisterService } from '../services/log-register.service';


@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [LogRegisterService]
})
export class LogFormComponent implements OnInit {

  constructor(public register: LogRegisterService) { }

  ngOnInit() {
  }

  createRegister(obj) {
      this.register.addReg(obj.value);
  }
}
