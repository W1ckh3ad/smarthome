import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {
  deviceId$: Observable<string> = null;
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.deviceId$ = this.activeRoute.paramMap.pipe(map((x) => x.get('id')));
  }
}
