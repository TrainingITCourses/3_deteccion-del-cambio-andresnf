export enum ActionTypes {
  getStatusList,
  getAgencyList,
  getTypeList
}
export interface Action {
  readonly type: ActionTypes;
  readonly payload?: any;
}
export class GetStatusList implements Action {
  public type = ActionTypes.getStatusList;
  constructor(public readonly payload: any[]) { }
}
export class GetAgencyList implements Action {
  public type = ActionTypes.getAgencyList;
  constructor(public readonly payload: any[]) { }
}
export class GetTypeList implements Action {
  public type = ActionTypes.getTypeList;
  constructor(public readonly payload: any[]) { }
}
export type Actions = GetStatusList | GetAgencyList | GetTypeList;
