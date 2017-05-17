import { Component, OnInit } from '@angular/core';
import {accessControlLog} from '../services/access-control.service'


@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [accessControlLog]
})
export class LogFormComponent implements OnInit {

  constructor(private accessControl : accessControlLog) { }

  ngOnInit() {}

  receiveData(form){
    this.accessControl.addAccessItem(form.value.person, form.value.message)
    alert('Log created successfuly')
  }

}
