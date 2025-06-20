import {Injectable} from '@angular/core';
import {UserData} from '../models/userData';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  URL: string = "http://localhost:3000/ELEMENT"

  constructor(private http: HttpClient) {
  }

  getData1(): Observable<UserData[]> {
    return this.http.get<UserData[]>((this.URL + '1'))
  }

  getData2(): Observable<UserData[]> {
    return this.http.get<UserData[]>((this.URL + '2'))
  }

  getData3(): Observable<UserData[]> {
    return this.http.get<UserData[]>((this.URL + '3'))
  }
}
