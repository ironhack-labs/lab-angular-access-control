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
    this.service.addAccessItem(myForm);
    this.a=true;
  }

}
