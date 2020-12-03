import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BACKEND_URL = environment.url;

  constructor(
    private http: HttpClient) { }

    sendCode(type, value) {
      // tslint:disable-next-line: max-line-length
      return this.http.post(`${this.BACKEND_URL}/api/driver/login/forgot-password-send-code`, {type: type, value: value});
    }
}
