import { Launch } from './../store/models/launch';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../store/api.service';
import { Status } from '../store/models/status';
import { Agency } from '../store/models/agency';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { ConditionStatus, ConditionAgency, ConditionType } from '../reducers/condition.actions';


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
  public conditions: any[];


  constructor(private api: ApiService, private store: Store<State>) {}

  ngOnInit() {
    this.arrCriterioBusqueda = [
      {key: 1, text: 'Estado'},
      {key: 2, text: 'Agencia'},
      {key: 3, text: 'Tipo'}
  ];

   this.store.select(s => s.condition).subscribe(value => {
    this.elementosCombo = value.conditions;
   });

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
        // this.elementosCombo = this.statuses;
        this.store.dispatch(new ConditionStatus(this.conditions));
        // this.elementosCombo = this.conditions;
        this.criterioName = this.arrCriterioBusqueda[0].text;
        break;
      case 2:
        // this.elementosCombo = this.agencies;
        this.store.dispatch(new ConditionAgency(this.conditions));
        // this.elementosCombo = this.conditions;
        this.criterioName = this.arrCriterioBusqueda[1].text;
        break;
      case 3:
        // this.elementosCombo = this.types;
        this.store.dispatch(new ConditionType(this.conditions));
        // this.elementosCombo = this.conditions;
        this.criterioName = this.arrCriterioBusqueda[2].text;
        break;
      default:
      break;
    }
  }
}
