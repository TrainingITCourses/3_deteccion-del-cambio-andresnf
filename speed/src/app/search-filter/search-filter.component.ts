import { GetTypeList, GetAgencyList, GetStatusList } from './../store/store.actions';
import { StoreService } from './../store/store.service';
import { Launch } from './../store/models/launch';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../store/api.service';
import { Status } from '../store/models/status';
import { Agency } from '../store/models/agency';


@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  @Output() public search = new EventEmitter<string>();
  public statuses: Status[];
  public agencies: Agency[];
  public types: any[];
  public launches: Launch[];
  public arrCriterioBusqueda: any[];
  public elementosCombo: any[];
  public criterioName: string;
  public state: any[];


  constructor(private api: ApiService, private store: StoreService) {}

  ngOnInit() {
    this.arrCriterioBusqueda = [
      {key: 1, text: 'Estado'},
      {key: 2, text: 'Agencia'},
      {key: 3, text: 'Tipo'}
  ];

   this.store.select$().subscribe(state => (this.state = state));
   this.getStatusList();
   this.getAgencyList();
   this.getTypeList();
   this.getLaunchList();
  }

  getLaunchList(): void {
    this.api.getLaunchList().
    subscribe(data =>
        this.launches = data);
  }

  getStatusList(): void {
    this.api.getStatusList().
    subscribe(data =>
        this.statuses = data);
  }

  getAgencyList(): void {
    this.api.getAgencyList().
    subscribe(data =>
        this.agencies = data);
  }

  getTypeList(): void {
    this.api.getTypeList().
    subscribe(data =>
        this.types = data);
  }

  onRadioButtonChange(entry) {

    switch (entry.key) {
      case 1:
        this.store.dispatch(new GetStatusList(this.statuses));
        this.elementosCombo = this.state;
        this.criterioName = this.arrCriterioBusqueda[0].text;
        break;
      case 2:
        this.store.dispatch(new GetAgencyList(this.agencies));
        this.elementosCombo = this.state;
        this.criterioName = this.arrCriterioBusqueda[1].text;
        break;
      case 3:
        this.store.dispatch(new GetTypeList(this.types));
        this.elementosCombo = this.state;
        this.criterioName = this.arrCriterioBusqueda[2].text;
        break;
      default:
      break;
    }
  }
}
