import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/access.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers : [AccessControlLog]
})
export class LogFormComponent implements OnInit {

  constructor( private access : AccessControlLog) { }

  ngOnInit() {
  }

  addItemForm( p , m) {
    this.access.addAccessItem(p , m);
    this.access.logMessages.forEach(item =>{
      console.log('this is the name '+item.person+' and this is the message'+item.message );
    })
    return  `<p> Your registration was successful</p>`;
  }
 

}
