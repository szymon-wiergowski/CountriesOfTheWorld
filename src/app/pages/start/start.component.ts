import { Component } from '@angular/core';

import { Region } from 'src/app/models/region';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  constructor() {}

  error?: string;
  regions: Region[] = [
    { name: 'Americas', searchName: 'americas' },
    { name: 'Europe', searchName: 'europe' },
    { name: 'Asia', searchName: 'asia' },
    { name: 'Africa', searchName: 'africa' },
    { name: 'Oceania', searchName: 'oceania' },
  ];
}
