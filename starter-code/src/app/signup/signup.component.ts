import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AccessControlLog } from  "../../services/accesscontrollog.service"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  submitted:boolean = false;

  constructor(public accessLog:AccessControlLog) { }

  ngOnInit() {
  }

  submitForm(myForm){
    if(myForm.value.person != undefined && myForm.value.message != undefined){
      this.accessLog.addAccessItem(myForm.value.person, myForm.value.message);
      this.submitted = true;
      console.log(this.accessLog.getAccessLog())
    }
  }
}
