import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/login.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [AccessControlLog]
})
export class FormComponent implements OnInit {
  confirm: boolean = false;

  constructor(public accessCtrl: AccessControlLog) { }

  ngOnInit() {
  }

  submitForm(thisForm) {

    console.log(thisForm.value);
    this.accessCtrl.addAccessItem(thisForm);
    this.confirm = true;

    if (this.confirm) {
      setTimeout(()=>{
        this.confirm = false;
      },2000);
      this.accessCtrl.getAccessLog();
    }
  }

}
