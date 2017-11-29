import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccessControllService } from './AccessControllLog.service';
import { LogFormComponentComponent } from './log-form-component/log-form-component.component'

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
  providers: [AccessControllService],
  bootstrap: [AppComponent]
})
export class AppModule { }
