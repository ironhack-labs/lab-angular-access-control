import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/access.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers:[AccessControlLog]
})
export class LogFormComponentComponent implements OnInit {

  constructor(public log:AccessControlLog) { }

  ngOnInit() {
  }
  addValues(person, message){

    person = person.value;
    message = message.value;
    console.log(person, message);

    this.log.addRegister(person, message)

  }
  showPerson(){


    var array = this.log.getRegisters();


    array.forEach(function(element) {
    console.log("Person : " + element.person);
    console.log("Message : " + element.message);
    console.log("Date : " + element.date);

    });

  }

}
