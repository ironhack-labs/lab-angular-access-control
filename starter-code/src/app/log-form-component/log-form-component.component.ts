import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/access-control-log.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessControlLog]
})
export class LogFormComponentComponent implements OnInit {
  
  //Creamos un array y traemos el array del servicio
  logMessages: Array<Object> = this.servicioAccessLog.logMessages;
  
  // Variable para el aviso y control de clases
  alertaActiva: boolean = false;
  constructor(private servicioAccessLog: AccessControlLog) { }

  // No se necesita 
  ngOnInit() {}

  // Función que llama a la función del mismo nombre en el servicio
  getAccessLog() {
    this.servicioAccessLog.getAccessLog();
  }

  // Función que llama a la función del mismo nombre en el servicio
  addAccessItem(myForm){
    this.servicioAccessLog.addAccessItem(myForm);
    this.alertaActiva = true;
  }

}
