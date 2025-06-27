import {Injectable} from '@angular/core';
import {EatenTacosData} from '../models/eaten-tacos-data';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  URL: string = "http://localhost:3000/ELEMENT"

  constructor(private http: HttpClient) {
  }

  getDataValencia(): Observable<EatenTacosData[]> {
    return this.http.get<EatenTacosData[]>((this.URL + 'VALENCIA'));
  }

  getDataMadrid(): Observable<EatenTacosData[]> {
    return this.http.get<EatenTacosData[]>((this.URL + 'MADRID'));
  }

  getDataBarcelona(): Observable<EatenTacosData[]> {
    return this.http.get<EatenTacosData[]>((this.URL + 'BARCELONA'));
  }

  async sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
