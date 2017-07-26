import { Component, OnInit } from '@angular/core';
import {AccessControlLogService} from '../../services/AccessControlLog.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponentComponent implements OnInit {

  constructor(private addPerson: AccessControlLogService) { }

  ngOnInit() {
  }

  addAccessItem(myForm){
    console.log("addAccessService entered!");
    console.log(myForm.value.person,myForm.value.message);
    this.addPerson.addAccessItem(myForm.value.person, myForm.value.message);
    const listUsers = this.addPerson.getAccessLog();
    console.log('All players:');
    listUsers.forEach((user)=>{
      console.log(`Person ${user.person} Message ${user.message} Created At: ${user.createdAt}`);
    });
  }

}
