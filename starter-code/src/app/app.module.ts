import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogFromComponent } from './pages/log-from/log-from.component';
import { AccessLogService } from './services/access-log.service';

@NgModule({
  declarations: [
    AppComponent,
    LogFromComponent
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
