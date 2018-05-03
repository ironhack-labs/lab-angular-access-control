import { Component, OnInit } from "@angular/core";
import { AccessControlLogService } from "../AccessControlLog.service";

@Component({
  selector: "app-LogFormComponent",
  templateUrl: "./LogFormComponent.component.html",
  styleUrls: ["./LogFormComponent.component.css"],
  providers: [AccessControlLogService]
})
export class LogFormComponentComponent implements OnInit {
  registration: boolean = true;
  constructor(private accessControlLogService: AccessControlLogService) {}

  ngOnInit() {}

  addUser(form) {
    this.registration = this.accessControlLogService.addAccessItem(
     form.value.person,
      form.value.message
    );
    form.reset()
  }

  showForm() {
    this.registration = !this.registration;
  }
}
