import { Component, OnInit } from '@angular/core';
import { AccessControlLog} from '../services/access.service';
import { Log } from '../models/logs';


@Component({
  selector: 'app-access-register',
  templateUrl: './access-register.component.html',
  styleUrls: ['./access-register.component.css'],
  providers: [AccessControlLog],

})
export class AccessRegisterComponent implements OnInit {

  log : Log;
  // accessControlLog: AccessControlLog;

  placeholder: Log = new Log('person', 'message');

  constructor(public accessControlLog: AccessControlLog) {}

  ngOnInit() {
    this.log = new Log;
    this.accessControlLog = new AccessControlLog;
  }

  addLogToRegister(){
    this.accessControlLog.addRegister(this.log.person, this.log.message);
    this.accessControlLog.getRegisters();
  }

}
