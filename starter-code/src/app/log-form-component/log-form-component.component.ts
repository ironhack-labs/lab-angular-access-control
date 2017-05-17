import { Component, OnInit } from '@angular/core';
import {AccessService} from "../services/access.service";

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {
  succesMessage = false;
  message : string;
  person: string;

  constructor(private access :AccessService) {}

  ngOnInit() {
  }
  submitForm(myForm){
  this.succesMessage = true ;
  this.message = myForm.value.message;
  this.person = myForm.value.person;
  this.access.addAccessItem(this.person,this.message);
  this.access.getAccessLog()
  myForm.reset();
  
  }
}
