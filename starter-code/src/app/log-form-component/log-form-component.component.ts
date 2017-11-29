import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/acces.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessControlLog]
})

export class LogFormComponentComponent implements OnInit {

  constructor(private acces: AccessControlLog) { }

  ngOnInit() {
  }

  onSubmit(item){
    console.log(item.controls.message.value);
    console.log(item.controls.person.value);
    this.acces.addAccesItem(item.controls.person.value, item.controls.message.value)
  }

}
