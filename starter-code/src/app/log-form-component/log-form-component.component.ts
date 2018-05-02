import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/AccessControlLog'

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessControlLog]
})
export class LogFormComponentComponent implements OnInit {

  constructor( private theAccess : AccessControlLog ) {    
  }

  ngOnInit() {
  }

signUp(value){
  this.theAccess.addAccessItem(value)
  this.theAccess.getAccessLog();
}  


}
