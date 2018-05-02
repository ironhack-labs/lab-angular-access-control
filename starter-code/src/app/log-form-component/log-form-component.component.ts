import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LockerControlService } from '../locker-control.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {
  isVis: boolean = true;
  constructor(private lockerControl: LockerControlService) { }

  ngOnInit() {
  }

  addAccessItem(myForm){

    this.lockerControl.addAccessItem(myForm)
    //this.logMessages.push({person, message})
  }

  displayText(){
    this.isVis = !this.isVis;
    
  }

}
