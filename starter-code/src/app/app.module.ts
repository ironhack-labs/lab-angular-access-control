import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AccessLogService } from './services/access-log.service';

import { AppComponent } from './app.component';
import { LogFormComponent } from './components/log-form/log-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LogFormComponent
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
