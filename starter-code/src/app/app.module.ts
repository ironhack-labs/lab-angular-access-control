import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AccessControlComponent } from "./access-control/access-control.component";
import { LogFormComponent } from "./log-form/log-form.component";
import { AccessControlLog } from "app/services/access-control-log.service";

@NgModule({
  declarations: [AppComponent, AccessControlComponent, LogFormComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [LogFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
