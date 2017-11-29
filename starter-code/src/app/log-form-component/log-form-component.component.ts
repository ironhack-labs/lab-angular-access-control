import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccessControlLogic } from '../services/AccessControlLog.service';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers:[AccessControlLogic]
})
export class LogFormComponentComponent implements OnInit {


  constructor(private accessControl: AccessControlLogic) { }

  AddItem(form){
    console.log(form);
    this.accessControl.addAccessItem(form.value.person,form.value.message);
    form.reset();
    this.logItems()
  };

    logItems(){
        this.accessControl.getAccesLog().forEach( e=>{
        console.log(e);
      });
    }

  ngOnInit() {
  }

}
