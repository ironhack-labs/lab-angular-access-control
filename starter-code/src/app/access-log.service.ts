import { Injectable } from '@angular/core';

@Injectable()
export class AccessLogService {

  accessLog: Object[] = [
    { person: "Adel", message: "Training", createdAt: Date },
    { person: "Robert", message: "Emotional support", createdAt: Date},
    { person: "Bilbo", message: "Second Breakfast", createdAt: Date}
  ]

  constructor() { }

}
