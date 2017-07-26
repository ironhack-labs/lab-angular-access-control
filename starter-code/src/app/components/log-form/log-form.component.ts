import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  person:string;
  message:string;

  constructor(private AccessControl: AccessControlLogService) { }

  ngOnInit() {
  }

  submitForm(myForm) {
    this.AccessControl.addAccessItem(this.person, this.message);
    this.AccessControl.getAccessLog().forEach((el)=> {
      console.log("Person", el.person);
      console.log("Message", el.message);
    })
  }


}
