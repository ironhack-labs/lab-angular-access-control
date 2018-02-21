import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { PeopleService } from 'app/services/people.service';
import { LogFormComponentComponent } from './component/log-form-component/log-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LogFormComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
