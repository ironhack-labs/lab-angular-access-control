import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/AccessControlLog';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLog]
})
export class LogFormComponent implements OnInit {
  person:string;
  message:string;
  saved:boolean;

  constructor(private myService: AccessControlLog) { 

  }

  ngOnInit() {
  }

  submitForm(myForm){

    console.log(myForm);
    this.myService.addAccessItem(this.person, this.message);
    this.saved = true;
    myForm.reset();
  }

}
