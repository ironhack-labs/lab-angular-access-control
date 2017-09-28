import { Component, OnInit } from '@angular/core';
import { AccesControlLog } from '../../services/log.service'

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  logged: boolean = false;
  username: string = '';
  message: string = '';

  constructor(private accesControlLog: AccesControlLog) { }

  ngOnInit() {

  }

  addAccesItem() {
    this.accesControlLog.addAccesItem(this.username, this.message);
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
