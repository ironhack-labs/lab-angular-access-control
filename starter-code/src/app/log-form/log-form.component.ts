import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/access.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  //providers : [AccessControlLog]
})
export class LogFormComponent implements OnInit {
  added : boolean = false;
  lastPerson : string;
  constructor( private access : AccessControlLog) { }

  ngOnInit() {
  }

  addItemForm(user) {
    this.lastPerson = user.value.person;
    this.added = true;

    this.access.addAccessItem(user.value.person, user.value.message);
    console.log(this.access.getAccessLog());
  }
 

}
