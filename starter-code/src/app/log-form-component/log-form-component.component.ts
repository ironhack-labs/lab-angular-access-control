import { Component, OnInit } from '@angular/core';
import { AccessService } from '../services/access.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessService]
})

export class LogFormComponentComponent implements OnInit {

  constructor(private myService: AccessService) { }

  ngOnInit() {
  }

  submitForm(myForm: NgForm) {
     this.myService.addAccessItem(myForm.value.person, myForm.value.message);
     console.log(this.myService.getAccessLog());
   }
}
