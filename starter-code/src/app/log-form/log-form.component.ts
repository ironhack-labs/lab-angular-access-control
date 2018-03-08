import { Component, OnInit } from '@angular/core';
import {accessControlService} from '../services/accessControlLog.service';


@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [accessControlService]
})
export class LogFormComponent implements OnInit {

  constructor(private accessService:accessControlService) { }

  ngOnInit() {
  }

  submitForm(myForm) {
    console.log(myForm.value);
    console.log(myForm.value.username);
    console.log(myForm.value.message);
    this.accessService.addAccessItem(myForm)

  }



}
