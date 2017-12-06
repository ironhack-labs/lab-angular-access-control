import { Component, OnInit, Input } from '@angular/core';
import {AccessControlLogService} from '../access-control-log.service';
@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers:[AccessControlLogService]
})
export class LogFormComponent implements OnInit {

  @Input() accessItems: any = {};

  constructor(private aclService: AccessControlLogService) { }

  ngOnInit() {
  }

  callAddAccessItem(event){
    this.aclService.addAccessItem(this.accessItems.person, this.accessItems.message);
    this.accessItems = {};
    console.log(this.aclService.logMessages);
    alert('Person and message was created successfully!');
  }
}
