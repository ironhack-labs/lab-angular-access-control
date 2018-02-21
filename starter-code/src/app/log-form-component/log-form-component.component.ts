import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../../services/AccessControlLog.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})

export class LogFormComponentComponent implements OnInit {

  constructor(public adder:AccessControlLog) { }

  ngOnInit() {

  }

  submitForm(form){
    let {username, message} = form.value;
    console.log(`The username is ${username} and the message is ${message}`);
    this.adder.addAccessItem(username,message);
    this.adder.people.forEach( p => console.log(p));
    console.log(`La ultima persona registrada es ${this.adder.people[this.adder.people.length - 1]["person"]}`);
  }
}
