import { Component, OnInit } from '@angular/core';

import { AccessControlLogService } from '../services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  constructor(private accessControlLog: AccessControlLogService) { }

  ngOnInit() {
  }

  submitForm(myForm) {
    this.accessControlLog.addAccessItem(myForm.value.person,myForm.value.message);
    this.showItems();
  }

  showItems(){
    console.log(this.accessControlLog.getAccessLog());
  }

}
