import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LogFormComponent } from './log-form/log-form.component';

import { AccessControlLogService } from './access-control-log.service';



@NgModule({
  declarations: [
    AppComponent,
    LogFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AccessControlLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
