import React from 'react';
import { Alert } from 'react-native';
import Game from './Game';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers'

class GameContainer extends React.Component {
  render() {
    const store = createStore(reducer);
    return (
      <Provider store={store}>
        <Game
          onFinish={this.props.onFinish}
        />
      </Provider>
    )
  }
}

export default GameContainer
