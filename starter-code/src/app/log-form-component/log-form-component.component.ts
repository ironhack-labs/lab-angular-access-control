import { Component, OnInit } from '@angular/core';
import {AccessControlLog} from '../../services/accessControlLog.service'

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessControlLog]
})

export class LogFormComponentComponent implements OnInit {
  person: string
  message: string

  constructor(public serviceControl: AccessControlLog) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.serviceControl.addAccessItem(this.person, this.message)

    this.serviceControl.getAccesLog().forEach(e=>console.log(e));
  }
}
