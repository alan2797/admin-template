import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private storageService: StorageService) { }

  // Set the json data to local storage
  public setJsonValue(key: string, value: any) {
      this.storageService.secureStorage.setItem(key, value);
  }

  // Get the json value from local storage
  public getJsonValue(key: string) {
      return this.storageService.secureStorage.getItem(key);
  }
  // Clear the local storage
  public clearToken() {
      return this.storageService.secureStorage.clear();
  }

  public credentialSession(valueToken: string) {
      let keyToken = environment.TokenEncrypt;
      this.setJsonValue(keyToken, valueToken);
      let keyIsLogged = environment.idTypeUser;
      this.setJsonValue(keyIsLogged, true);
  }
}
