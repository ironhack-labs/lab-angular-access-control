import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccessLogService } from '../access-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  constructor(private accessLogService: AccessLogService) { }

  ngOnInit() {
  }

  form: any = {};
  showSuccess: boolean = false;

  submitForm(){
    this.accessLogService.addAccessItem(this.form.person, this.form.message);
    this.form.person = "";
    this.form.message = "";
    this.showSuccess = true;
    this.accessLogService.getAccessLog().forEach(log=>console.log(`Nombre: ${log.person}, Mensaje: ${log.message}, Hora: ${log.createdAt}`));
    setInterval(()=>{
      this.showSuccess = false;
    }, 5000);
  }

}
