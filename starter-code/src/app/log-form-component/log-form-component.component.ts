import { Component, OnInit } from '@angular/core';
import { AccessControlLogService  } from '../access-control-log.service'

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {

  constructor(private service: AccessControlLogService) { }

  

  ngOnInit() {
  }

}
