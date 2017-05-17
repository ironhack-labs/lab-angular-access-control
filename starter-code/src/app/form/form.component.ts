import { Component, OnInit } from '@angular/core';
import { accessControl } from '../accessControlService';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [accessControl]
})
export class FormComponent implements OnInit {
  done="";
  constructor(private form: accessControl) { }

  ngOnInit() {
  }

  submitForm(myForm) {
    this.done = "Form Send";
    this.form.addAccessItem(myForm.value.person, myForm.value.message);
    this.form.getAccessLog();
  }

}
