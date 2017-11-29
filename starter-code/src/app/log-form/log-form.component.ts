import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/AccessControlLog.service';


@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
})
export class LogFormComponent implements OnInit {
  a:boolean = false;
  constructor(public service:AccessControlLog) { }

  ngOnInit() {
  }

  addAccessItem(myForm){
    this.service.addAccessItem(myForm.form.controls.person.value, myForm.form.controls.message.value);
    this.a=true;
    this.service.logMessages.forEach((e)=> console.log(e));

  }

}
