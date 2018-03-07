import { Component, OnInit } from '@angular/core';
// Import the AccessControlLog Service
import { AccessControlLog }  from "../services/log.service";

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  // Add the AccessControlLog Service as a provider
  providers: [AccessControlLog]
})
export class LogFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
