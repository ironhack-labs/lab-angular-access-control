import { Component, OnInit } from '@angular/core';
import { AccessControlService } from "../access-control.service";
import { access } from 'fs';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {

  constructor ( private accessControl: AccessControlService ) { }

  ngOnInit () { }
  
  addAccessItem ( person: string, message: string )
  {
    this.accessControl.addAccessItem( person, message );
    console.log( ...this.accessControl.getAccessLog());
  }
}
