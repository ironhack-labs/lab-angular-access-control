import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers : [ServicesService]
})
export class LogFormComponentComponent implements OnInit {
 a: boolean = false;
  constructor(public accessService : ServicesService) { }

  ngOnInit() {
  }
submitForm(myForm){
  this.accessService.addAccessItem(myForm.value.person, myForm.value.message);
  this.a = true;
  this.accessService.access.forEach(e => console.log(e));
}

}
