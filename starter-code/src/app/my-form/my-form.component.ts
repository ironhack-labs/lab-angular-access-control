import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from "../services/AccessControlLog.service";

@Component({
  selector: "app-my-form",
  templateUrl: "./my-form.component.html",
  styleUrls: ["./my-form.component.css"]
})
export class MyFormComponent implements OnInit {
  constructor(public logService: AccessControlLog) {}
  a: boolean = false;
  ngOnInit() {}
  addAccessItem(myForm) {
    this.logService.addAccessItem(
      myForm.form.controls.username.value,
      myForm.form.controls.password.value
    );
    myForm.reset();
    this.logService.logMessage.forEach(e => console.log(e));
    this.a = true;
    console.log(myForm);
  }
}
