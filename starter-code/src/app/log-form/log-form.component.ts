import { Component, OnInit } from '@angular/core';
import {AccesControlLogService} from '../acces-control-log.service'

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccesControlLogService]
})
export class LogFormComponent implements OnInit {
  person = "";
  message = "";
  error = undefined;
  addSuccesful = undefined;
  
  constructor( private accesControlLogService: AccesControlLogService ) { }

  ngOnInit() {
  }

  submitForm(form){
this.error = undefined;
this.addSuccesful = undefined;
    if (form.value.person != "" && form.value.menssage != ""){
      this.accesControlLogService.addAccesItem(form.value.person, form.value.message)
      this.addSuccesful = "Log add succesfully"
      console.log("Log from getAcces:",this.accesControlLogService.getAccesLog())
    }

    else this.error = "Campos invalidos"

  }

}
