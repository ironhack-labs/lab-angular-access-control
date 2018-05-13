import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service'

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [LogService]
})
export class LogFormComponent implements OnInit {
  added: boolean = false;
  lastPerson: string;

  constructor(private theLog: LogService) { }

  ngOnInit() {
  }

  addToLog(myForm) {
    this.lastPerson = myForm.value.person;
    this.added = true;
    this.theLog.addAccessItem(myForm.value.person, myForm.value.message);
    console.log(this.theLog.getAccessLog());
  }
}
