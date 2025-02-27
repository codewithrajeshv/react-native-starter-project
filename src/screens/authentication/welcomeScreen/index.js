import React, {Component} from 'react';
import Config from 'react-native-config';
import {ScreenContainer, StyledText} from '../../../components/core';

class WelcomeScreen extends Component {
  render() {
    console.log({config: Config.getConstants()});
    return (
      <ScreenContainer center>
        <StyledText>Welcome Screen</StyledText>
      </ScreenContainer>
    );
  }
}

export default WelcomeScreen;
