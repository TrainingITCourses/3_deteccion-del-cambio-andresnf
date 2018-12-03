import { ActionTypes, Actions } from './store.actions';
export function reducer(state: any, action: Actions): any {
  let result = { ...state };
  switch (action.type) {
    case ActionTypes.getStatusList:
      result = action.payload;
      break;
    case ActionTypes.getAgencyList:
      result = action.payload;
      break;
    case ActionTypes.getTypeList:
    result = action.payload;
      break;
    default:
      break;
  }
  return result;
}
