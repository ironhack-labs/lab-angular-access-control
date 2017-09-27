import { Component, OnInit } from '@angular/core';
import { AccessControlLogComponent } from '../access-control-log/access-control-log.component';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [ AccessControlLogComponent ]
})

export class LogFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addAccessItem(myForm) {
    console.log("Your message was send successfully!") 
  }

}
