import { Component, OnInit } from '@angular/core';
import { AccessControlService } from '../services/access-control.service';

@Component({
  selector:      'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls:   ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  theItem: any ={};

  constructor(public accessThang : AccessControlService ) { }

  ngOnInit() {
  }

  addUserItem(){
    alert('Log added');
    this.accessThang.addAccessItem(this.theItem);
    this.theItem = {};
    this.accessThang.getAccesslog();
  }
}
