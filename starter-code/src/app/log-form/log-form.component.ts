import { Component, OnInit } from '@angular/core';
import { AccessService } from '../services/access.service';

@Component({
  selector: 'app-log-form',
  template:  `
  <form (ngSubmit)="submitForm(myForm)" #myForm="ngForm" novalidate>
  <p> Username
    <input type="text" name="person" [(ngModel)]="person"
          #myUsername="ngModel" required/>
  </p>
  <div *ngIf="myUsername.errors && (myUsername.dirty || myUsername.touched)">
    <p class="error" [hidden]="!myUsername.errors.required">
      Username is required
  </div>
  <p> Message
    <input type="text" name="message" [(ngModel)]="message"
          #myMessage="ngModel" required />
  </p>
  <div *ngIf="myMessage.errors && (myMessage.dirty || myMessage.touched)">
    <p class="error" [hidden]="!myMessage.errors.required">
      Message is required
    </p>
  </div>
  <button type="submit"> Submit </button>
</form>
`,
  styleUrls: ['./log-form.component.css'],
  providers: [AccessService]
})
export class LogFormComponent implements OnInit {

  constructor(private theAccessLog: AccessService) { }

  ngOnInit() {
  }

  submitForm(myForm) {
    this.theAccessLog.addAccessItem(myForm.value.person, myForm.value.message);
    myForm.reset();
    console.log(this.theAccessLog.getAccessLog());
  }

}
