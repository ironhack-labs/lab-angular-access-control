import { Component, OnInit } from '@angular/core';
import {AccesControlLogService} from 'app/acces-control-log.service';


@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers:[AccesControlLogService]
})
export class LogFormComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
