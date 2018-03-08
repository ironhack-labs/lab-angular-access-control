import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/accessControlLog';


@Component({
  selector: 'app-logform',
  templateUrl: './logform.component.html',
  styleUrls: ['./logform.component.css']
})
export class LogformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  submitForm(myForm) {
    console.log(myForm.value.username);
    console.log(myForm.value.message);
  }

}
