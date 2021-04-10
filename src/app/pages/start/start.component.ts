import { Component, OnInit } from '@angular/core';

import { debounceTime } from 'rxjs/operators';

import { Country } from 'src/app/models/country';
import { Region } from 'src/app/models/region';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  constructor(private http: HttpService) {}

  country?: Country;
  error?: string;
  regions: Region[] = [
    { name: 'Africa', searchName: 'africa' },
    { name: 'Americas', searchName: 'americas' },
    { name: 'Asia', searchName: 'asia' },
    { name: 'Europe', searchName: 'europe' },
    { name: 'Oceania', searchName: 'oceania' },
  ];

  ngOnInit() {
    this.http
      .getCountry('poland')
      .pipe(debounceTime(300))
      .subscribe(
        (res) => ((this.country = res)),
        (error) => (this.error = error)
      );
  }
}
