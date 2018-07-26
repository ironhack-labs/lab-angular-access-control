import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
  }

  form: any = {};
  newPer: boolean = false;

  submitForm() {
    this.serviceService.addAccessPer(this.form.person, this.form.message);
    this.form.person = "";
    this.form.message = "";
    this.newPer = true;
    this.serviceService.getAccess().forEach(log => console.log(`Nombre: ${log.person}, Mensaje: ${log.message}, Hora: ${log.createdAt}`));
    setInterval(() => {
      this.newPer = false;
    }, 5000);
  }

}
