import { Component, OnInit } from '@angular/core';
import { AccessControlService } from '../services/access-control.service';


@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  providers: [AccessControlService]
})
export class ControlComponent implements OnInit {
  controller:boolean = false;
  constructor(private access: AccessControlService) { }

  ngOnInit() {

  }
  check(form) {
    console.log(form);
    this.access.addAccessItem(form.value.person,form.value.message);
    this.controller=!this.controller
    console.log(this.controller)

  }


}
