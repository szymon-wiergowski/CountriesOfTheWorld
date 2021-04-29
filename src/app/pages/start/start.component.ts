import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { hideBackButton, showBackButton } from '../../actions/display.actions';

import { Region } from 'src/app/models/region';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit, OnDestroy {

  constructor(public store: Store<{ disp: boolean }>) {
    this.dispplayButton$ = store.select('disp');
  }
  dispplayButton$: Observable<boolean>;

  error?: string;
  regions: Region[] = [
    { name: 'Americas', searchName: 'americas' },
    { name: 'Europe', searchName: 'europe' },
    { name: 'Asia', searchName: 'asia' },
    { name: 'Africa', searchName: 'africa' },
    { name: 'Oceania', searchName: 'oceania' },
  ];

  ngOnInit(): void {
    this.store.dispatch(hideBackButton());
  }

  ngOnDestroy() {
    this.store.dispatch(showBackButton());
  }
}
