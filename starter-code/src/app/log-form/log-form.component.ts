import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/access.service';



@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLog]
})
export class LogFormComponent implements OnInit {
  constructor(public accessService : AccessControlLog) { }
  RegistrationConfirm:boolean = false;
  ngOnInit() { }
    submitForm(myForm) {
      this.accessService.addAccessItem(myForm.value.username, myForm.value.message);
      this.RegistrationConfirm = true;
  }

}
