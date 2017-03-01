import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/access-control-log.service'

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessControlLog]

})
export class LogFormComponentComponent implements OnInit {

  constructor(public access: AccessControlLog) { }

  ngOnInit() {
  }


  addRegister(person, message){
    person = person.value;
    message = message.value;
    this.access.addRegister(person,message);
  }

}
