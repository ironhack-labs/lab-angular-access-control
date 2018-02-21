import { Component, OnInit } from '@angular/core';
import { AccessControLogService } from '../services/our-service.service';

@Component({
  selector: 'app-my-signup-form',
  templateUrl: './log-form-component.component.html' ,

  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessControLogService]
})
export class LogFormComponentComponent implements OnInit {

  constructor(private logControl: AccessControLogService) {}

  ngOnInit() {}

  addAccess(myForm) {
    let a = myForm.value;
    this.logControl.addAccessItem(a);
    alert("Registration successful");
  }
}