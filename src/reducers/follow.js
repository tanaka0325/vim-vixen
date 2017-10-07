import actions from 'actions';

const defaultState = {
  enabled: false,
  newTab: false,
  keys: [],
};

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
  case actions.FOLLOW_ENABLE:
    return Object.assign({}, state, {
      enabled: true,
      newTab: action.newTab,
    });
  case actions.FOLLOW_DISABLE:
    return Object.assign({}, state, {
      enabled: false,
    });
  case actions.FOLLOW_KEY_PRESS:
    return Object.assign({}, state, {
      keys: state.keys.concat([action.key]),
    });
  case actions.FOLLOW_BACKSPACE:
    return Object.assign({}, state, {
      keys: state.keys.slice(0, -1),
    });
  default:
    return state;
  }
}
