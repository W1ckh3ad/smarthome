import { Component, OnInit } from '@angular/core';
import { LoadService } from '../../services/load/load.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(public load: LoadService) {}

  ngOnInit() {}
}
