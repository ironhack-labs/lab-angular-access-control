import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/counter.service';
@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  a:boolean = false;
  constructor(private logService: AccessControlLog) { }

  ngOnInit() {
  }
  addAccessItem(myForm){
    this.logService.addAccessItem(myForm.form.controls.username.value,myForm.form.controls.password.value);
    myForm.reset();
    this.logService.logs.forEach(e => console.log(e));
    this.a = true;
    console.log(myForm)
  }
}
