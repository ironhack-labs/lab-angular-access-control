import { Component, OnInit, Input } from '@angular/core';
import {AccesControlLogService} from '../acces-control-log.service'

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccesControlLogService]
})
export class LogFormComponent {
  person: string;
  message: string;
  constructor( private accesControlLogService: AccesControlLogService ) { }


  addPerson(form){
  if (form.valid){
    this.accesControlLogService.addAccesItem(form.value.person, form.value.message)
    console.log(this.accesControlLogService.getAccessLog())
  } else {
    console.log('not valid')
    }
  }
}
