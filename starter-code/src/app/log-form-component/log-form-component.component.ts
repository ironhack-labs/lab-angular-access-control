import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/acces.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessControlLog]
})

export class LogFormComponentComponent implements OnInit {
  inilong: number = 0;

  constructor(private acces: AccessControlLog) { }

  ngOnInit() {
  }

  onSubmit(a){
    this.inilong = this.acces.logMessages.length;
    this.acces.addAccesa(a.controls.person.value, a.controls.message.value);
    if (this.inilong < this.acces.logMessages.length) {
      this.inilong=-1;
    }
    a.reset();
    for (var i=0; i < this.acces.logMessages.length; i++){
        console.log(this.acces.logMessages[i]);
    }
  }

}
