import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [ AccessControlLogService ]
})

export class LogFormComponent implements OnInit {
  successLogin: boolean = false;

  constructor(private accessControl: AccessControlLogService) { }

  ngOnInit() {
  }

  addAccess(myForm) {
      this.successLogin = !this.successLogin
      this.accessControl.addAccessItem(myForm.value.name, myForm.value.message)
    }

}
