import { Injectable } from '@angular/core';
import CryptoJS from 'crypto-js';
import SecureStorage from 'secure-web-storage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  public secureStorage = new SecureStorage(sessionStorage, {
    hash: function hash(key: any): any {
        let id = sessionStorage.getItem(environment.idTypeUser);
        key = CryptoJS.SHA256(key, id);
        return key.toString();
    },

    // Encrypt the localstorage data
    encrypt: function encrypt(data: any) {
        let id = sessionStorage.getItem(environment.idTypeUser);
        data = CryptoJS.AES.encrypt(data, id);
        data = data.toString();
        return data;
    },

    // Decrypt the encrypted data
    decrypt: function decrypt(data: any) {
        let id = sessionStorage.getItem(environment.idTypeUser);
        data = CryptoJS.AES.decrypt(data, id);
        data = data.toString(CryptoJS.enc.Utf8);
        return data;
    },
});
}
