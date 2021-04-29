import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Region } from 'src/app/models/region';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit {
  constructor(private router: Router) { }

  @Input() region?: Region;
  public regionName?: string;
  public defaultRegion = 'europe';
  public regionSearchName?: string;

  ngOnInit(): void {
    this.regionName = this.region?.name;
    this.regionSearchName = this.region?.searchName || this.defaultRegion;
  }
}
