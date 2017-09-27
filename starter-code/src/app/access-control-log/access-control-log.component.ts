import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-control-log',
  templateUrl: './access-control-log.component.html',
  styleUrls: ['./access-control-log.component.css']
})


export class AccessControlLogComponent implements OnInit {
  logMessages: Array<Object> = [
    {
      person: String,
      message: String,
      createdAt: Date
    }
  ]

  addAccessItem(person, message) {

  }

  getAccessLog() {
    return this.logMessages
  }

  constructor() { }

  ngOnInit() {
  }

}
