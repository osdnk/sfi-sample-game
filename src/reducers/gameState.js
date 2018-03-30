const gameState = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_START':
      return {
        ...state,
        isStarted: !state.isStarted
      };
    case 'TOGGLE_END':
      state.isEnded = !state.isEnded;
      return state;
    default:
      return state
  }
};

const defaultState = {
  isStarted: false,
  isEnded: false
};

export default gameState