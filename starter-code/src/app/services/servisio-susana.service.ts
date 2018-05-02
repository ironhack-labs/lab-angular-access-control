import { Injectable } from "@angular/core";
export interface Susana {
  person: String,
  message: String,
  createdAt: Date
}
@Injectable()
export class ServisioSusanaService {
  susanArray: Array<Susana> = [];
  constructor() {}
  addAccessItem(person, message) {
    const item = {
      person,
      message,
      createdAt: new Date()
    }
    this.susanArray.push(item);
  }

  getAccessLog() {
    return this.susanArray;
  }
}
