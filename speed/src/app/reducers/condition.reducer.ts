import { ActionTypes, ConditionActions } from './condition.actions';


export interface State {
  conditions: any[];
  message?: string;
}

export const initialState: State = {
  conditions: [],
  message: ''
};

export function reducer(state = initialState, action: ConditionActions): State {
  switch (action.type) {
    case ActionTypes.GetStatus:
      return { ...state, conditions: action.payload };
    case ActionTypes.GetAgency:
      return { ...state, conditions: action.payload };
    case ActionTypes.GetType:
      return { ...state, conditions: action.payload };
    case ActionTypes.NotCondition:
      return { ...state, message: action.payload };
    default:
      return state;
  }
}
