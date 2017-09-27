import { Component, OnInit } from '@angular/core';
import {AccessControlLog} from '../../service/AccesControlLog.service'

@Component({
  selector: 'app-my-signup-form',
  templateUrl: './my-signup-form.component.html',
  styleUrls: ['./my-signup-form.component.css'],
  providers:[AccessControlLog]
})
export class MySignupFormComponent implements OnInit {
  show: boolean = true;

  constructor(public service :AccessControlLog) { }

  ngOnInit() {
  }


 submitForm(myForm){
   this.show = !this.show
   this.service.addAccessItem(myForm.value.person,myForm.value.message);
   console.log(this.service.getAccessLog());
 }



}
