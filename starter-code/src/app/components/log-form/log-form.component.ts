import { Component, OnInit } from "@angular/core";
import { AccessControlLogService } from "../../services/access-control-log.service";
import { setTimeout } from "timers";
import { DatePipe } from "@angular/common";
import { LogMessage} from "../../models/LogMessage";



@Component({
  selector: "app-log-form",
  templateUrl: "./log-form.component.html",
  styleUrls: ["./log-form.component.css"]
})
export class LogFormComponent implements OnInit {
  newLog = new LogMessage();
  // name: string;
  // message: string;

  submitted = false;
  feedbackEnabled = false;

  constructor(private theAccessControl: AccessControlLogService) {  }

  ngOnInit() {
    // this.newLog = this.theAccessControl.newLog;
  }

  submitForm(myForm) {
    if (myForm.valid) {
      this.theAccessControl.addAccessItem(this.newLog);
      this.newLog = new LogMessage();
      this.submitted = true;
      this.feedbackEnabled = false;
      setTimeout(() => {
        this.submitted = false;
      }, 2000);
      this.theAccessControl.getAccessLog();
    } else {
      this.feedbackEnabled = true;
      setTimeout(() => {
        this.feedbackEnabled = false;
      }, 2000);
      // this.message = null;
    }
  }

}
