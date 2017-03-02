import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../access-control-log.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers : [AccessControlLog]
})
export class FormComponent implements OnInit {

  constructor(public AccessControlLog : AccessControlLog) { }

  ngOnInit() {
  }
  addRegister(obj){
    this.AccessControlLog.addRegister(obj.value);
  }


}
