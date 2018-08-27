import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/login.service';
import { person } from '../Interfaces/person.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers:[LogService]
}) 

export class LoginFormComponent implements OnInit {

  item: person = {
    person: '',
    message: '',
    createdAt: new Date()
  };
  registration: Boolean = false;
  constructor(public lS: LogService) { }

  ngOnInit() {
  }

  addAccessItem(){
    this.lS.addAccessItem(this.item);
    const logs = this.lS.getAccessLog();
    logs.forEach(e=>console.log(`${e.person} accessed on ${e.createdAt}`));
  }

  toggleRegistration(){
    this.registration = true;
  }
}