import { Component, OnInit } from '@angular/core';
import { AccessControllService } from '../AccessControllLog.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {
  show:Boolean = false;


  constructor(private accessing : AccessControllService) { }

  ngOnInit() {
  }

  sendForm(form){
    this.accessing.addAccessItem(form.value.person, form.value.message);
    this.toggleMessage();
  }

  toggleMessage(){
    this.show = !this.show;
  }
}
