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

  registeringAccess(form){
    this.accessControl.addAccessItem(form.value.person, form.value.message)
    this._showCompleteLogInConsole()
    alert('Log created successfuly')
  }

  _showCompleteLogInConsole(){
    return this.accessControl.getAccessLog().map( person => {
      console.log(person)
    })
  }

}
