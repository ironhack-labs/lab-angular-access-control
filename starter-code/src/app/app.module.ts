import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccessLogService } from 'sevices/log.sevice';
import { LogformComponent } from './logform/logform.component';

@NgModule({
  declarations: [
    AppComponent,
    LogformComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccessLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
