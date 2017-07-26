

export class AccessControlLog {

  // logMessages: Array<{person: string, message: string, createdAt: Date}>;
  logMessages: Object[] = [
    {
      person: String,
      message: String,
      createdAt: Date,
    }
  ];

  constructor() {}

  addAccessItem(person, message) {

  }

  getAccessLog() {

  }
}
