import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Status } from '../store/models/status';
import { ApiService } from '../store/api.service';
import { Launch } from '../store/models/launch';

@Component({
  selector: 'app-status',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  @Input() public statusList: Status[] = [];
  @Input() public appTitle;
  public filteredLaunches: Launch[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  onSearch = (searchText: string) => {
    this.statusList = [];
    if (searchText !== '') {
      const search = searchText.toLowerCase();
      const launches = this.api.launches;
      const filteredLaunches = launches.filter(
        l =>
          l.status.toString().toLowerCase().includes(search)
      );
      this.filteredLaunches = filteredLaunches;
    } else {
      this.filteredLaunches = [];
    }
  }

}
