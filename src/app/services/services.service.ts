import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { StorageMap } from '@ngx-pwa/local-storage';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private storage: StorageMap) {


    interface IFriend {
      id?: number;
      name?: string;
      age?: number;
      address: string;
    }


    class FriendDatabase extends Dexie {
      friends: Dexie.Table<IFriend, number>;

      constructor() {
        super("FriendDatabase");
        this.version(1).stores({
          friends: "++id,name,age,address"
        });
      }
    }

    var db = new FriendDatabase();

    db.transaction('rw', db.friends, async () => {

      // Make sure we have something in DB:
      if ((await db.friends.where('name').equals('vikrant').count()) === 0) {
        await db.friends.add({ name: "vikrant", age: 21 , address: "Lucknow"});

      }

    }).catch(e => {
      alert(e.stack || e);
    });

  }


}


