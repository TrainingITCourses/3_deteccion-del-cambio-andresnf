import { ActionTypes, GetConditionStatus, NotSetCondition, GetConditionAgency, GetConditionType } from './condition.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from '../store/api.service';

@Injectable()
export class ConditionEffects {

  @Effect()
  public getConditionStatus$ = this.actions$.ofType(ActionTypes.Status).pipe(mergeMap(() => this.api.getStatusList()
    .pipe(
      map(data => new GetConditionStatus(data)),
      catchError(err => of(new NotSetCondition(err.message)))
    )
  ));

  @Effect()
  public getConditionAgency$ = this.actions$.ofType(ActionTypes.Agency).pipe(mergeMap(() => this.api.getAgencyList()
    .pipe(
      map(data => new GetConditionAgency(data)),
      catchError(err => of(new NotSetCondition(err.message)))
    )
  ));

  @Effect()
  public getConditionType$ = this.actions$.ofType(ActionTypes.Type).pipe(mergeMap(() => this.api.getTypeList()
    .pipe(
      map(data => new GetConditionType(data)),
      catchError(err => of(new NotSetCondition(err.message)))
    )
  ));

  constructor(
    private actions$: Actions,
    private api: ApiService
  ) {
  }
}
