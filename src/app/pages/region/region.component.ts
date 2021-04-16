import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Region } from 'src/app/models/region';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit {
  constructor(private router: Router) {}

  @Input() region?: Region;
  public regionName?: string;

  ngOnInit(): void {
    this.regionName = this.region?.name;
  }

  public NavigateToCountries(): void {
    this.router.navigate(['/countries'], {
      state: { region: this.region?.searchName },
    });
  }
}
