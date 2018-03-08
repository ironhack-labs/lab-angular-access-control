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
    this.accessService.addAccessItem(myForm)
  }

}
