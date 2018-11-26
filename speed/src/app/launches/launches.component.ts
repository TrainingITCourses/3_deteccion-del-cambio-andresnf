import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Launch } from '../store/models/launch';

@Component({
  selector: 'app-launches',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
  @Input() public counter = { length: 0};
  @Input() public launches: Launch[] = [];
  constructor() {}

  ngOnInit() {}
}
