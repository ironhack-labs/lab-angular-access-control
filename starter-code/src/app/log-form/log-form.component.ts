import { Component, OnInit } from '@angular/core';
import {AccesControlLogService} from '../acces-control-log.service'

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccesControlLogService]
})
export class LogFormComponent implements OnInit {
  
  constructor( private accesControlLogService: AccesControlLogService ) { }

  ngOnInit() {
  }

  addAccesItem= (person, message) =>{
    this.accesControlLogService.addAccesItem(person, message)
  }
}
