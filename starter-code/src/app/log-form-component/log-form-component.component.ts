import { Component, OnInit } from '@angular/core';
import { AccessService} from '../services/AccessControlLog.service';


@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessService]
})
export class LogFormComponentComponent implements OnInit {
myForm = {
  person: "" ,
  message: ""
};
  constructor(private accessControl: AccessService) { }

  ngOnInit() {
  }
// addAccess(myForm){
//   console.log()
//   this.myForm.person = myForm.value.person
//   this.myForm.message = myForm.value.message
//   this.accessControl.addAccessItem(this.myForm.person, this.myForm.message);
// }
submitForm(myForm) {
    console.log(myForm);
}
}
