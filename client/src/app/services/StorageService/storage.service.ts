import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private storage: Storage) {
  }

  public set(key: string, value: any) {
    return this.storage.set(key, value);
  }

   public async get(key: string) {
    return await this.storage.get(key);
  }

  public remove(key: string) {
    return this.storage.remove(key);
  }

  public clear() {
    return this.storage.clear();
  }
}