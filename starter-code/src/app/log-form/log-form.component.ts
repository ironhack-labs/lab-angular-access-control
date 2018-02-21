import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccessControlLog } from '../services/AccessControlLog';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  sent:boolean = false;

  constructor(private access:AccessControlLog) { }

  ngOnInit() {
  }

submitForm (form) {
  console.log(form)
  this.access.addAccessItem(form.value.message, form.value.person);
  this.sent = true;
  // this.onAdd.emit(form)
}
 
}
