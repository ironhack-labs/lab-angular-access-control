import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  accessControlLog: AccessControlLogService;
  person: String = '';
  message: String = '';
  showMessage: Boolean = false;



  constructor() {
    this.accessControlLog = new AccessControlLogService;
   }

  ngOnInit() {
  }

  handleAddItem() {
    // This function is still being call when the form is invalid. WHY ? :( - Alright don't worry we fixed iiiit !!!!! ;)
    this.showMessage = this.accessControlLog.addAccessItem(this.person, this.message);
  }

}


