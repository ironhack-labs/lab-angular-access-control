import { Component } from '@angular/core';
import {LoggerService} from './services/logger.service'
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [LoggerService]
})
export class AppComponent {
  title = "app works!";
}
