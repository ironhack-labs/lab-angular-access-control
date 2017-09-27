import { Component, OnInit } from '@angular/core';
import { AccesscontrollogService } from '../services/accesscontrollog.service';

@Component({
  selector: 'app-logformcomponent',
  templateUrl: './logformcomponent.component.html',
  styleUrls: ['./logformcomponent.component.css']
})
export class LogformcomponentComponent implements OnInit {

  constructor(
    public accessThing: AccesscontrollogService
  ) { }

  ngOnInit() {
  }

}
