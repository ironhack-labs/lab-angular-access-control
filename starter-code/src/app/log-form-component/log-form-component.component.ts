import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../../services/accessLog.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {

  constructor(public servicio: AccessControlLog) { }

  person: string;
  message: string;
  createAt: Date;

  ngOnInit() {
  }

  addLogItem(){
    console.log(this.person, this.message);
    this.servicio.addAccessItem(this.person, this.message); // Es un metodo del servicio creado
  }

}
