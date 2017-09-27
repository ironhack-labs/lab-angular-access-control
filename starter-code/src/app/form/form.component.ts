import { Component, OnInit } from '@angular/core';
import { LogsService } from '../services/logs.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  log: any = {};

  constructor(
    private logsThang: LogsService
  ) { }

  ngOnInit() {
  }

}
