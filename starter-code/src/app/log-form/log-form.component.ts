import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/sports-service';


@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})

export class LogFormComponent implements OnInit {

  constructor(private accessService: AccessControlLog ) { }

  ngOnInit() {
  }

  submitForm(myForm) {
    console.log(myForm.value);
    console.log(myForm.value.username);
    console.log(myForm.value.message);
    this.accessService.addAccessItem(myForm)
  }

}
