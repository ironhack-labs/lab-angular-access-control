import { Injectable } from "@angular/core";

@Injectable()
export class ServisioSusanaService {
  susanArray: Array<Object> = [
    {
      person: String,
      message: String,
      createdAt: new Date()
    }
  ];
  constructor() {}
  addAccessItem(person, message) {
    this.susanArray.push({ person, message, createdAt: new Date() });
  }

  getAccessLog() {
    return this.susanArray;
  }
}
