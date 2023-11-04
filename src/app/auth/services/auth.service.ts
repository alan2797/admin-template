import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { COOKIE_KEY, TIME_EXPIRED } from '../utils/constans';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService, private router: Router) {}

  isLoggedInApp() {
      return (
          this.cookieService.get(COOKIE_KEY.TOKEN) &&
          this.cookieService.get(COOKIE_KEY.USER)
      );
  }

  saveJwtCookie(user: any, jwt: any) {
      this.cookieService.set(COOKIE_KEY.USER, JSON.stringify(user));
      this.cookieService.set(COOKIE_KEY.TOKEN, jwt, TIME_EXPIRED);
  }

  loginSesion(
      usuario: string | null | undefined,
      password: string | null | undefined
  ) {
      let token = 'asdasda872y183u1293u129h123892183u912//*';
      this.saveJwtCookie({ usuario, password }, token);
      this.router.navigate(['/blocks']);
  }

  closeSession() {
      this.cookieService.delete(COOKIE_KEY.USER);
      this.cookieService.delete(COOKIE_KEY.TOKEN);
      this.router.navigate(['/auth/login']);
  }
}
