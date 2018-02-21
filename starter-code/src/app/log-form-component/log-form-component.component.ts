import { Component, OnInit } from '@angular/core';
import { AccessControLogService } from '../services/our-service.service';

@Component({
  selector: 'app-my-signup-form',
  template: 
  `
    <form (ngSubmit)="addAccess(myForm)" #myForm="ngForm">
      <p> Person
        <input type="text" name="person" [(ngModel)]="person" required />
      </p>
      <p> Message
        <input type="message" name="message" [(ngModel)]="message" required />
      </p>
      <button type="submit"> Add log </button>
    </form>
  `,
  styles: [],
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