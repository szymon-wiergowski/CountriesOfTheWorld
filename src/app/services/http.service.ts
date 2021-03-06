import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Country } from '../models/country';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  public BASE_URL = 'https://restcountries.eu/rest/v2/region';

  getCountries(region: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.BASE_URL}/${region}`);
  }
}
