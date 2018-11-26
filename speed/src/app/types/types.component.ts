import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from '../store/api.service';
import { Launch } from '../store/models/launch';

@Component({
  selector: 'app-types',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  @Input() public typesList: any[] = [];
  public filteredLaunches: Launch[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  onSearch = (searchText: string) => {
    this.typesList = [];
    if (searchText !== '') {
      const search = searchText.toLowerCase();
      const launches = this.api.launches;
      const lunechesWithMissions: Launch[] = [];
      launches.forEach(element => {
        if (element.missions && element.missions.length) {
          lunechesWithMissions.push(element);
        }
      });
      const filteredLaunches = lunechesWithMissions.filter(
        l =>
          l.missions[0].id.toString().toLowerCase().includes(search)
      );
      this.filteredLaunches = filteredLaunches;
    } else {
      this.filteredLaunches = [];
    }
  }

}
