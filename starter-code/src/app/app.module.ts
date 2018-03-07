import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccessControlLogService } from './access-control-log.service';

import { AppComponent } from './app.component';
import { LogFormComponentComponent } from './log-form-component/log-form-component.component';
import { LogFormComponent } from './log-form/log-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LogFormComponentComponent,
    LogFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccessControlLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
