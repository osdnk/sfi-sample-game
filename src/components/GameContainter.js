import React from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';;
import Game from './Game';

class GameContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          position: 'absolute',
          width: '80%',
          height: '80%'
        }}>
        <Game
          onFinish={(points) => Alert.alert('Finished', `got ${points} points`)}
        />
      </View>
      </View>
    )
  }
}

export default GameContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
