import { Status } from './../store/models/status';
import { Agency } from './../store/models/agency';
import { Component, Input, ChangeDetectorRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from '../store/api.service';

@Component({
  selector: 'app-search',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnChanges {

  @Input() public appTitle;
  public status: Status[] = [];
  public agencies: Agency[] = [];
  public types: any[] = [];

  constructor(private api: ApiService, private cdRef: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes: ' + changes);
  }

  onGetStatus() {
    this.clearVariables();
    this.api.getStatusTypes$().subscribe(data => {
      this.status = data;
    });
    this.cdRef.detectChanges();
  }

  onGetAgencies() {
    this.clearVariables();
    this.api.getAgencies().subscribe(data => {
      this.agencies = data;
    });
    this.cdRef.detectChanges();
  }

  onGetTypes() {
    this.clearVariables();
    this.api.getMissionTypes().subscribe(data => {
      this.types = data;
    });
    this.cdRef.detectChanges();
  }

  clearVariables() {
    this.status = [];
    this.agencies = [];
    this.types = [];
  }

}
