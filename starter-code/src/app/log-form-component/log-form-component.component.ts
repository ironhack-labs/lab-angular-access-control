import { Component, OnInit } from '@angular/core';
import {AccesLogService } from '../services/acces-log.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {

  constructor(private accesLog: AccesLogService) { }

  ngOnInit() {
  }

  addAccessItem( person, message){
    this.accesLog.addAccessItem(person, message)
  }
}
