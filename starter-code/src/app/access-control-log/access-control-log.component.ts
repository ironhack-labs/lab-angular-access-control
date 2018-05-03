import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-access-control-log',
  templateUrl: './access-control-log.component.html',
  styleUrls: ['./access-control-log.component.css']
})
export class AccessControlLogComponent implements OnInit {
 

  constructor() { }

  ngOnInit() {
  }

  addAccessItem(person, message){}

  getAccessLog(){}
}
