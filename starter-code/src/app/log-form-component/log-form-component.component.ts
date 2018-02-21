import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from 'services/AccessControlLog.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessControlLog]
})
export class LogFormComponentComponent implements OnInit {

  constructor(public accessLog:AccessControlLog) {}

  ngOnInit() {
  }

  submitForm(form){
    console.log(form);
    let {person, message} = form.value;
    this.accessLog.addAccessItem(person, message);
    console.log(`El usuario es ${person} con el mensaje ${message}`);
  }

}
