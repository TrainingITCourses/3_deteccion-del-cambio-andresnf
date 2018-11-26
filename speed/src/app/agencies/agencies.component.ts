import { Agency } from './../store/models/agency';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Launch } from '../store/models/launch';
import { ApiService } from '../store/api.service';

@Component({
  selector: 'app-agencies',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {

  @Input() public agenciesList: Agency[] = [];
  public filteredLaunches: Launch[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  onSearch = (searchText: string) => {
    this.agenciesList = [];
    if (searchText !== '') {
      const search = searchText.toLowerCase();
      const launches = this.api.launches;
      const lunechesWithMissions: Launch[] = [];
      const lunechesWithMissionsAndAgencies: Launch[] = [];
      launches.forEach(element => {
        if (element.missions && element.missions.length) {
          lunechesWithMissions.push(element);
        }
      });
      launches.forEach(element => {
        if (element.rocket.agencies && element.rocket.agencies.length) {
          lunechesWithMissionsAndAgencies.push(element);
        }
      });
      const filteredLaunches = lunechesWithMissionsAndAgencies.filter(
        l =>
          l.rocket.agencies[0].id.toString().toLowerCase().includes(search)
      );
      this.filteredLaunches = filteredLaunches;
    } else {
      this.filteredLaunches = [];
    }
  }

}
