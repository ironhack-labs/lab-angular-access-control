import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/AccessControlLog.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
checksubmit = false;
  constructor(private LogFormComponent: AccessControlLog) { }

  ngOnInit() {
  }

  showSuccess(){
    this.checksubmit = !this.checksubmit
  }

  addAccessItem(myForm){
    this.LogFormComponent.addAccessItem(myForm.value.person, myForm.value.message);
    console.log("helloooo");
    this.showSuccess();

  };


}
