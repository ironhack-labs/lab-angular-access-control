import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/AccessControlLog.service'

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {

  constructor(public access: AccessControlLog) { }

  ngOnInit() {
  }
  getRegisters () {
    this.access.getRegisters();
  }
  addRegister (person: string, message: string) {
    this.access.addRegister(person, message);
  }
}
