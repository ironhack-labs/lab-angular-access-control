import { Component, OnInit } from '@angular/core';
import { AccesControlLog } from '../../services/log.service'

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  logged = false;

  constructor(private accesControlLog: AccesControlLog) { }

  ngOnInit() {

  }

  addAccesItem(myForm) {
    this.accesControlLog.addAccesItem(myForm.value.username, myForm.value.message);
    this.logged = true;
    this.showAllTheLogs();
  }

  showAllTheLogs() {
    let allLogs = this.accesControlLog.getAccessLog();
    allLogs.forEach((log) => {
      console.log(`User: ${log.person} Message: ${log.message} At: ${log.createdAt}`)
    });
  }
}
