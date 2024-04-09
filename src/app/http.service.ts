import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationModel } from './registration-model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  APIURL = 'https://utazasi-iroda.jedlik.cloud';

  constructor(private http: HttpClient) { }

  getDestinations(): Observable<any> {
    return this.http.get<any[]>(`${this.APIURL}/api/journeys/short`);
  }

  sendRegistration(model: RegistrationModel): Observable<any> {
    return this.http.post<any>(`${this.APIURL}/api/reserve`, model);
  }

  getJourneys(): Observable<any> {
    return this.http.get<any[]>(`${this.APIURL}/api/journeys`);
  }
}
