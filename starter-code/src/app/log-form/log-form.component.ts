import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/AccessControlLog';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponent implements OnInit {

  constructor(private accessControl: AccessControlLogService) { }

  person:string;
  message:string;

  success:string;

  ngOnInit() {
  }

  addToList(form){
    this.person = form.controls.person.value;
    this.message = form.controls.message.value;
    this.accessControl.addAccessItem(this.person, this.message);
    this.success = 'Person added!';
  }

}
