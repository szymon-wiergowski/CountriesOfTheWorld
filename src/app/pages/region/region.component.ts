import { Component, Input, OnInit } from '@angular/core';

import { Region } from 'src/app/models/region';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit {

  @Input() region?: Region;
  public regionName ? = '';

  ngOnInit(): void {
    this.regionName = this.region?.name;
   }
}
