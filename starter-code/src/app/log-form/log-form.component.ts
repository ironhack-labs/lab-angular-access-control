import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/AccessControlLog.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLog]
})
export class LogFormComponent implements OnInit {
  newPerson: Object  = {};
  constructor(public access: AccessControlLog) { }

  ngOnInit() {
  }
  getRegisters(myForm) {
    var newDate= new Date();
    console.log (newDate);
    console.log(myForm.value.person);
    this.newPerson ={person:myForm.value.person,message:myForm.value.message,createdAt:newDate}
    //  this.access.addRegister(myForm.value.person,myForm.value.message);
    this.access.addRegister(this.newPerson);
   }
}
