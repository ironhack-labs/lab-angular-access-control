import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AccessLogService } from '../access-log.service';

@Component({
  selector: 'app-locker-room',
  templateUrl: './locker-room.component.html',
  styleUrls: ['./locker-room.component.css']
})
export class LockerRoomComponent implements OnInit {
  logs: Array<any>

  @Input() lockerRoom:any 

  constructor(
    private service: AccessLogService
  ) { }

  form: any = {};


  submitForm(){
    this.service.addAccessItem(this.form.person, this.form.message);
    this.form.person = "";
    this.form.message = "";
    this.service.getAccessLog().forEach(log=>console.log(`Nombre: ${log.person}, Mensaje: ${log.message}, Hora: ${log.createdAt}`));
 
  }

  ngOnInit() {
    // this.logs = this.service.getAccessLog()
    console.log(this.logs)
  }

}
