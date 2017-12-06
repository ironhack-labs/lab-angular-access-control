import { Injectable } from '@angular/core';

@Injectable()
export class AccessService {

  lockerRoom: any[] = [{

      person: "Josh",
      message: "Getting Books",
      createdAt: Date()
}
]

  constructor() { }

  getAccessLog(){
    return this.lockerRoom;
  }

  addAccessItem(thelockerRoom: any) {
    const lastIndex = this.lockerRoom.length-1;
    const lastlockerRoom = this.lockerRoom[lastIndex];

    thelockerRoom.id = lastlockerRoom.id + 1;
    this.lockerRoom.push(thelockerRoom);

    console.log(this.lockerRoom);
}


}
