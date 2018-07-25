import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';
import { person } from '../../interfaces/person.interface';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [LogService]
})
export class LogFormComponent implements OnInit {

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
