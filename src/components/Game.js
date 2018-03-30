import React from 'react';
import update from 'immutability-helper';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux'
import { startGame, toggleBlack, toggleGreen, toggleRed } from '../actions/index';

const mapStateToProps = (state, ownProps) => ({
  points: state.points,
  isStarted: state.gameState.isStarted
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleGreen: () => dispatch(toggleGreen),
  toggleRed: () => dispatch(toggleRed),
  startGame: () => dispatch(startGame)
})

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bumps: []
    }
  }

  bumpClick = (type, ind) => {
    if (type === 'RED')
      this.props.toggleRed();
    else if (type === 'GREEN')
      this.props.toggleGreen();
    else {
      clearTimeout(this.to);
      if (this.props.onFinish)
        this.props.onFinish(this.props.points)
    }
    const i = this.state.bumps.findIndex(e => e.ind === ind)
    this.setState(prevState => ({
      bumps: update(prevState.bumps, {$splice: [[i, 1]]})
    }))
  }



  index = 0;
  generateComponents = (pitch = 2000) => {
    const left = `${Math.random() * 80}%`;
    const top = `${Math.random() * 80}%`;
    const type = Math.random()<0.4 ? 'GREEN' :
      Math.random()<0.5 ? 'RED' : 'BLACK';
    this.setState({
      bumps: this.state.bumps.concat({
        left, top, type, ind: this.index
      })
    });
    this.index ++;
    console.log(this.state)
    this.to = setTimeout(() => this.generateComponents(pitch * 0.95), pitch)
  }

  componentWillReceiveProps = newProps => {
    if (newProps.isStarted && !this.props.isStarted) {
      this.generateComponents();
    }
  }

  render() {
    const { points, isStarted, startGame } = this.props;
    console.log(isStarted);
    return (
      <View style={styles.container}>
        <Text style = {styles.points}>
          {points}
        </Text>
        {!isStarted && <TouchableOpacity
          onPress={() => startGame()}
          color="#841584"
        >
          <Text>
            START
          </Text>

        </TouchableOpacity>}
        {isStarted && this.state.bumps.map((b, i) =>
          <TouchableOpacity
            style={[styles.bump, {
              left: b.left,
              top: b.top,
              backgroundColor: b.type.toLowerCase()
            }]}
            onPress={() => this.bumpClick(b.type, b.ind)}
            key={`bump${i}`}>
            <Text>
              {b.type[0]}
            </Text>
          </TouchableOpacity>
        )}
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
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
  },
  points: {
    zIndex: 1,
    left: '10%',
    top: '10%',
    fontSize: 40,
    color: 'violet'
  },
  bump: {
    borderWidth: 2,
    borderColor: 'blue',
    position: 'absolute',
    width: '20%',
    height: '20%'
  }
});
