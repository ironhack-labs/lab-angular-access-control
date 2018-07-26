import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AccessLogService } from './access-log.service';
import { LogFormComponent } from './log-form/log-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LogFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [AccessLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
