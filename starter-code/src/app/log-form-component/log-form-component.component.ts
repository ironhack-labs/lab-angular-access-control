import { Component, OnInit } from '@angular/core';
import { AccesControlLogService} from '../acces-control-log.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccesControlLogService]
})
export class LogFormComponentComponent implements OnInit {

  constructor( public counter : AccesControlLogService) { }

  ngOnInit() {
  }

  addRegister(obj) {
    this.counter.addRegister(obj.value)
  }
}
