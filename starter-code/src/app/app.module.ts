import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccessComponent } from './access/access.component';
import { AccessServiceService } from './access/accessService.service';
import { AccessControlLogService } from './access/AccessControlLog.service';
import { LogFormComponent } from './logForm/logForm.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    LogFormComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
