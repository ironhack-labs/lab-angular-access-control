import { Component, OnInit } from '@angular/core';

import {AccessService} from '../access.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  thelockerRoom: any = {};

  constructor(private lockerThang: AccessService) { }

  ngOnInit() {
  }

  logSubmit() {
    this.lockerThang.addAccessItem(this.thelockerRoom);
    this.thelockerRoom = {};
    alert("Form Submitted");
  }


}
