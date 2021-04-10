import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Region } from 'src/app/models/region';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit {
  constructor(public router: Router, private http: HttpService) {}

  @Input() region?: Region;
  public regionName?: string;

  ngOnInit() {
    this.regionName = this.region?.name;
  }

  public NavigateToCountries() {
    this.router.navigate(['/countries'], {
      state: { region: this.region?.searchName },
    });
  }
}
