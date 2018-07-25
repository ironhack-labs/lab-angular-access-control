import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../service/AccessControlLogService';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers:[AccessControlLogService]
})
export class LogFormComponent implements OnInit {
  person: string ="";
  message: string="";

  constructor(public aclg:AccessControlLogService) { }

  ngOnInit() {
  }

  addAccesItem(person,message){
    this.aclg.addAccessitem(person,message)
    this.person=""
    this.message=""
  }

}
