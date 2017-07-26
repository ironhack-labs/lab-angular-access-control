import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../../services/AccessControlLog.service'

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLog]
})
export class LogFormComponent implements OnInit {
  show: boolean = true;

  constructor(public service: AccessControlLog) { }

  ngOnInit() {
  }

  submitForm(myForm) {
    this.show = !this.show;
    this.service.addAccessItem(myForm.value.person, myForm.value.message);
    console.log(this.service.getAccessLog());
  }

}
