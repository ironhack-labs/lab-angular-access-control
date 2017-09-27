import { Component, OnInit } from '@angular/core';
import { AccessControl } from '../access.service';

@Component({
  selector: 'app-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.css'],
  providers: [AccessControl]
})
export class AccessControlComponent implements OnInit {
  myForm = {
    person: "",
    message : ""
  }
  constructor(private accessControl: AccessControl) { }

  ngOnInit() {
  }

  submitForm(result){
    this.myForm.person = result.form.value.person
    this.myForm.message =result.form.value.message
    this.accessControl.addAccessItem(this.myForm)
    this.accessControl.getAccessLog()
  }

}
