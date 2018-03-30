import { combineReducers } from 'redux'
import points from './points'
import gameState from './gameState';

export default combineReducers({
  points,
  gameState
})