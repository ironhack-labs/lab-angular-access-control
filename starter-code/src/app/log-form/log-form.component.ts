import { Component, OnInit } from "@angular/core";
import { AccessControlLogService } from "services/access.service";

@Component({
  selector: "app-log-form",
  templateUrl: "./log-form.component.html",
  styleUrls: ["./log-form.component.css"],
  providers: [AccessControlLogService]
})
export class LogFormComponent implements OnInit {
  successMessage: string = "";
  constructor(private accessControl: AccessControlLogService) {}

  ngOnInit() {}

  addAccessItem(form) {
    if (!form.controls.person.errors && !form.controls.message.errors) {
      this.accessControl.addAccessItem(form.value.person, form.value.message);
      this.successMessage = "Item added.";
      form.reset();

      this.accessControl.logMessages.forEach(e => console.log(`Person: ${e["person"]} - Message: ${e["message"]}`));
    }
  }
}
