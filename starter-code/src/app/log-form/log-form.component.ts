import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/AccessControlLog';
import { IPerson } from '../../interfaces/IPerson';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponent implements OnInit, IPerson {

  constructor(private accessControl: AccessControlLogService) { }

  person:string;
  message:string;
  createdAt:Date;
  success:string;
  list:Array<IPerson> = [];

  ngOnInit() {
  }

  addToList(form){
    this.person = form.controls.person.value;
    this.message = form.controls.message.value;
    this.accessControl.addAccessItem(this.person, this.message);
    this.success = 'Person added!';
    setTimeout(() => {
      this.success = '';
    }, 3000);
    this.showList();
    this.person = '', this.message = '';
  }

  showList(){
    this.list = this.accessControl.getAccessLog();
    this.list.forEach(e => {
      console.log(`Person: ${e.person} | Message: ${e.message} | Date: ${e.createdAt}`);
    });
  }

}
