import { Component, OnInit, } from '@angular/core';
import{AccessControlLogService} from '../../services/accesscontrollog.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public messageLog: AccessControlLogService) { }

  ngOnInit() {
  }
  submitForm(myForm) {
    console.log(myForm);
    let{person, message} = myForm.value;
    this.messageLog.addAccessItem(person, message);
    console.log(`registro exitoso ${person} bien  ${message} mal`);
    console.log(this.messageLog.logMessages)
  }
}
