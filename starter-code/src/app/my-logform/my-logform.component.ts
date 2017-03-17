import { Component, OnInit } from '@angular/core';
import { AccesControl } from '../services/accesscontrol.service';

@Component({
  selector: 'app-my-logform',
  templateUrl: './my-logform.component.html',
  styleUrls: ['./my-logform.component.css'],
  providers: [AccesControl]
})
export class MyLogformComponent implements OnInit {

  constructor(public accesscontrol: AccesControl) { }

  ngOnInit() {
  }

  addPerson(person,message) {
    this.accesscontrol.addRegister(person,message);
  }

  showList() {
  this.accesscontrol.getRegisters()}
}
