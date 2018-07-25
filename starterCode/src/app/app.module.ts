import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AccessLogService } from './access-log.service';
import { LockerRoomComponent } from './locker-room/locker-room.component'
import { FormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LockerRoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AccessLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
