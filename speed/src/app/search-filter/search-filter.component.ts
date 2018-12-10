import { Launch } from './../store/models/launch';
import { Component, EventEmitter, OnInit, Output, ChangeDetectorRef } from '@angular/core';
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
  @Output() public search = new EventEmitter<any>();
  public statuses: Status[];
  public agencies: Agency[];
  public types: any[];
  public launches: Launch[];
  public arrCriterioBusqueda: any[];
  public elementosCombo: any[];
  public criterioName: string;
  public conditions: any[];
  public entry: any = null;
  public updateVaribles: Boolean = false;


  constructor(private api: ApiService, private store: Store<State>, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.arrCriterioBusqueda = [
      {key: 1, text: 'Estado'},
      {key: 2, text: 'Agencia'},
      {key: 3, text: 'Tipo'}
  ];

   this.store.select(s => s.condition).subscribe(value => {
    if (this.entry != null) {
      this.elementosCombo = value.conditions;
      this.updateVaribles = true;
      this.onRadioButtonChange(this.entry);
    }
   });

   this.getLaunchList();
  }

  getLaunchList(): void {
    this.api.getLaunchList().
    subscribe(data =>
        this.launches = data);
  }

  onRadioButtonChange(entry) {

    this.entry = entry;
    if (!this.updateVaribles) {
      this.dispatchAction(entry);
    } else {
      this.cdRef.detectChanges();
      switch (entry.key) {
        case 1:
          this.criterioName = this.arrCriterioBusqueda[0].text;
          this.updateVaribles = false;
          break;
        case 2:
          this.criterioName = this.arrCriterioBusqueda[1].text;
          this.updateVaribles = false;
          break;
        case 3:
          this.criterioName = this.arrCriterioBusqueda[2].text;
          this.updateVaribles = false;
          break;
        default:
        break;
      }
    }
  }

  dispatchAction(entry) {
    switch (entry.key) {
      case 1:
        this.store.dispatch(new ConditionStatus(this.conditions));
        break;
      case 2:
        this.store.dispatch(new ConditionAgency(this.conditions));
        break;
      case 3:
        this.store.dispatch(new ConditionType(this.conditions));
        break;
      default:
      break;
    }
  }

}
