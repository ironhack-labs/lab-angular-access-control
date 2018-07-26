import { Component, OnInit } from '@angular/core';
import {AccessControlLogService } from '../access-control-log.service'


@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {

  // constructor(private service: AccessControlLogService) { }

  person: String;
  message: String;
  createdAt: any;

  // constructor() { }

  logMessages: Array<Object> = [
    {
      person: String,
      message: String,
      createdAt: Date
    }
  ]

  addAccessItem(form) {
    console.log(form.value);
    
    this.person = form.value.name;
    this.message = form.value.message;
    this.createdAt = form.value.createdAt;
    // this.createdAt = Date.now()
    console.log(this.person);
    console.log(this.message);

    this.logMessages.push(form.value, this.createdAt = Date.now());

  }

  getAccessLog(){
    console.log( this.logMessages);
    console.log(this.createdAt)
  }
  ngOnInit() {
  }




}
