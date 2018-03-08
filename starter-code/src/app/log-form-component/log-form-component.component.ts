import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/AccessControlLog.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {

  constructor(private logService: LogService) { }

  ngOnInit() {
  }


}
