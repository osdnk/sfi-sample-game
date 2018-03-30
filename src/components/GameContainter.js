import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { startGame, toggleBlack, toggleGreen, toggleRed } from '../actions/index';

const mapStateToProps = (state, ownProps) => ({
  points: state.points,
  isStarted: state.gameState.isStarted
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleBlack: () => dispatch(toggleBlack),
  toggleGreen: () => dispatch(toggleGreen),
  toggleRed: () => dispatch(toggleRed),
  startGame: () => dispatch(startGame)
})

class Game extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.toggleGreen()}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
