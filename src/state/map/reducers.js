import {GET_MAP_ID, SET_MAP_ID, GET_IS_EDITING, GET_OL3_MAP, SET_OL3_MAP, SAVE_MAP_SUCCESS, SAVE_MAP_ERROR} from '../actiontypes';

const defaultState = {
  id: undefined,
  ol3Map: undefined,
  server: undefined,
  save: {
    success: false,
    error: false,
    errorMessage: undefined
  },
};

const map = (state = defaultState, action) => {
  switch(action.type) {
    case GET_MAP_ID:
      return state.id;
    case SET_MAP_ID:
      return Object.assign({}, state, {
        id: action.mapId
      });
    case GET_IS_EDITING:
      return (state.id !== undefined);
    case GET_OL3_MAP:
      return state.ol3map;
    case SET_OL3_MAP:
      return Object.assign({}, state, {
        ol3Map: action.map
      });
    case SAVE_MAP_SUCCESS:
      return Object.assign({}, state, {
        save: { success: true, error: false },
        id: action.result.id
      });
    case SAVE_MAP_ERROR:
      return Object.assign({}, state, {
        save: {success: false, error: true, errorMessage: action.error},
      });
    default:
      return state;
  }
}
export default map;
