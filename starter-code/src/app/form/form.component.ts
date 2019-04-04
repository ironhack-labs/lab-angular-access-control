import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from 'app/access-control-log.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [AccessControlLogService]
})
export class FormComponent {
  person: string;
  message: string;
  constructor(private accessCotrolLogService: AccessControlLogService) {    
  }
  addPerson(form){
    if (form.valid) {
      this.accessCotrolLogService.addAccessItem(form.value.person,form.value.message)
      console.log(this.accessCotrolLogService.getAccessLog())
    }
    else{
      console.log('Is not valid')
    }
  }
}
