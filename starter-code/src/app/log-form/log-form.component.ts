import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../../services/accessControlLog.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  answer : boolean = false;
  constructor ( public accessService : AccessControlLog ){}

  ngOnInit() {
  }

  goToInjectable(myForm) {
    this.answer = true;
    this.accessService.addAccessItem(myForm.value.person, myForm.value.message);
  }

}
