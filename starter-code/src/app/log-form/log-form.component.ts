import { Component, OnInit } from '@angular/core';
import {MyServiceService} from "../services/my-service.service";

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [MyServiceService]
})
export class LogFormComponent implements OnInit {
newVisit: Object = {};
  

constructor(private myService: MyServiceService) { }

  ngOnInit() {
  }

  addAccess(person, message){
    this.myService.addAccessItem(person, message)
  }


  getHistory(){
    this.myService.getAccessLog()
  }
  
}
