import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { LogFormComponentComponent } from "./LogFormComponent/LogFormComponent.component";
import { AccessControlLogService } from "./AccessControlLog.service";

@NgModule({
  declarations: [AppComponent, LogFormComponentComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [AccessControlLogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
