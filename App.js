import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './src/reducers'
import GameContainer from './src/components/GameContainter';

export default class App extends React.Component {
  render() {
    const store = createStore(reducer)
    console.log(store);
    return (
      <Provider store={store}>
        <GameContainer/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
