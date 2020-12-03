import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  BACKEND_URL = environment.url;

  constructor(
    private http: HttpClient) { }

  registerDriver(driver) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BACKEND_URL}/api/driver/register`, {name: driver.first + ' ' + driver.last, email: driver.email, phone: driver.phone, password: driver.password});
  }
}
