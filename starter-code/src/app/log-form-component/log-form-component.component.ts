import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../../services/access.service';


@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
})
export class LogFormComponentComponent implements OnInit {

  constructor(private logControl: AccessControlLog) { }

  addAccessItem(myForm) {
    let f = myForm.value;
    this.logControl.addAccessItem(f);
    console.log("Working")
  }

  ngOnInit() {
  }
}
