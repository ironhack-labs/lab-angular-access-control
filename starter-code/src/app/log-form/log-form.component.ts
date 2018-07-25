import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../services/log.services'

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponent implements OnInit {

  constructor(public access: AccessControlLogService) { }

  ngOnInit() {
  }
 submitForm(myForm){
  console.log(this.access)
  //console.log(myForm)
 }
}
  