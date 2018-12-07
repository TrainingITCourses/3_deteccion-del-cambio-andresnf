import { Action } from '@ngrx/store';

export enum ActionTypes {
  Status = 'Status',
  GetStatus = 'GetStatus',
  Agency = 'Agencies',
  GetAgency = 'GetAgencies',
  Type = 'Types',
  GetType = 'GetTypes',
  NotCondition = 'Not Condition'
}
export interface Action {
  readonly type: ActionTypes;
  readonly payload?: any[];
}
export class ConditionStatus implements Action {
  public type = ActionTypes.Status;
  constructor(readonly payload: any) {}
}
export class GetConditionStatus implements Action {
  public type = ActionTypes.GetStatus;
  constructor(readonly payload: any) {}
}
export class ConditionAgency implements Action {
  public type = ActionTypes.Agency;
  constructor(readonly payload: any) {}
}
export class GetConditionAgency implements Action {
  public type = ActionTypes.GetAgency;
  constructor(readonly payload: any) {}
}
export class ConditionType implements Action {
  public type = ActionTypes.Type;
  constructor(readonly payload: any) {}
}
export class GetConditionType implements Action {
  public type = ActionTypes.GetType;
  constructor(readonly payload: any) {}
}
export class NotSetCondition implements Action {
  readonly type = ActionTypes.NotCondition;
  constructor(readonly payload: any) {}
}

export type ConditionActions =
ConditionStatus | GetConditionStatus | ConditionAgency | GetConditionAgency | ConditionType | GetConditionType | NotSetCondition;
