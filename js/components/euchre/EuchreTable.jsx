import React from 'react';
import { withTheme } from '@material-ui/core/styles';

import EuchrePlayer from './EuchrePlayer';
import Stack from '../cards/Stack';
import { GameContext } from '../Game';

export default withTheme(class EuchreTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cardWidth: 0.1,
    }
  }

  render() {
    const screenWidth = this.props.screenWidth || visualViewport.width;
    const screenHeight = this.props.screenHeight || visualViewport.height;
    const cardWidth = screenWidth * this.state.cardWidth;
    const cardHeight = cardWidth * 1.4;
    return (
      <GameContext.Consumer>
        {gameState => (
          <div>
            <div style={{position: 'absolute', top: 0, left: screenWidth, transformOrigin: 'top left', transform: 'rotate(90deg)'}}>
              <EuchrePlayer player={1} cardWidth={this.state.cardWidth} />
            </div>
            <div style={{position: 'absolute', top: screenHeight, left: screenWidth, transformOrigin: 'top left', transform: 'rotate(180deg)'}}>
              <EuchrePlayer player={2} cardWidth={this.state.cardWidth} />
            </div>
            <div style={{position: 'absolute', top: screenHeight, left: 0, transformOrigin: 'top left', transform: 'rotate(270deg)'}}>
              <EuchrePlayer player={3} cardWidth={this.state.cardWidth} />
            </div>
            {/* player 4 */}
            <div style={{position: 'absolute', top: 0, left: 0}}>
              <EuchrePlayer player={4} cardWidth={this.state.cardWidth} />
            </div>
            {/* trick pile */}
            <Stack top={screenHeight / 2 - cardHeight / 2} left={screenWidth / 2 - cardWidth / 2} width={this.state.cardWidth} hRange={0.75} vRange={0.75} rRange={180} cards={gameState.hand.pile} />
          </div>
        )}
      </GameContext.Consumer>
    );
  }

});
