const points = (state = 0, action) => {
  switch (action.type) {
    case 'TOGGLE_GREEN':
      return state + 1;
    case 'TOGGLE_RED':
      return state - 1;
    default:
      return state
  }
}

export default points