import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogListComponent } from './log-list/log-list.component';
import { AccessService } from './services/access.service';
import { LogFormComponent } from './log-list/log-form/log-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LogListComponent,
    LogFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ AccessService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
