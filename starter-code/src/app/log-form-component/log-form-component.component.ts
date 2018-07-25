import { Component, OnInit } from '@angular/core';
import { AccessSControlLog } from '../services/AccessControlLog';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {
  username: string;
  message: string;
  submitted: boolean = false;

  constructor(public service: AccessSControlLog) { }

  ngOnInit() {
  }

  addAccessItem(p, m) {
    this.service.addAccessItem(p, m);
    this.username = "";
    this.message = "";
    this.submitted = true;
  } 





}
