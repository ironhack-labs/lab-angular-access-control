import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AccessService} from "./services/access.service";

import { AppComponent } from './app.component';
import { LogFormComponentComponent } from './log-form-component/log-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LogFormComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
