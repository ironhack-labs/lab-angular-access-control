import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccessControlLog } from "./services/AccessControlLog.service";

import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';

@NgModule({
  declarations: [AppComponent, MyFormComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [AccessControlLog],
  bootstrap: [AppComponent]
})
export class AppModule {}
