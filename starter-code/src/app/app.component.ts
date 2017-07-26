import { Component } from '@angular/core';
import {AccessControlLogService} from './services/AccessControlLog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccessControlLogService],
})
export class AppComponent {
  title = 'PP Angular Access Control!';

  constructor(private addPerson: AccessControlLogService){}

  //Can call service here later
  addAccessItem(person,message){
    console.log("addAccessService entered!");
    this.addPerson.addAccessItem(person,message);
    console.log(person,message);
  }
  
}
