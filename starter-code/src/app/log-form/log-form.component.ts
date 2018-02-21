import { Component, OnInit } from '@angular/core';
import { ControlService } from "../../services/control.service";

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})

export class LogFormComponent implements OnInit {

  constructor(private key: ControlService) { }

  submitForm(myForm){
    let pm = myForm.value;
    this.key.addAccessItem(pm);

  }

  ngOnInit() {
  }


}
