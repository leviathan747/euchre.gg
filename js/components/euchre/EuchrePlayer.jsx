import React from 'react';
import { withTheme } from '@material-ui/core/styles';

import EuchreScorecards from './EuchreScorecards';
import Stack from '../cards/Stack';
import { GameContext } from '../Game';

export default withTheme(class EuchrePlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const screenWidth = this.props.player % 2 === 0 ? this.props.screenWidth || visualViewport.width : this.props.screenHeight || visualViewport.height;
    const screenHeight = this.props.player % 2 === 1 ? this.props.screenWidth || visualViewport.width : this.props.screenHeight || visualViewport.height;
    const cardWidth = (this.props.screenWidth || visualViewport.width) * this.props.cardWidth;
    const cardHeight = cardWidth * 1.4;
    return (
      <GameContext.Consumer>
        {gameState => (
          <React.Fragment>
            {this.props.player === gameState.hand.dealer ? (
              <Stack top={screenHeight - 1.3 * cardHeight} left={screenWidth / 2 - cardWidth / 2} width={this.props.cardWidth}
                     hRange={0.05} vRange={0.05} rRange={1} cards={gameState.hand.kitty} />
            ) : (null)}
            {this.props.player === 1 ? (
              <EuchreScorecards anchor="bottom left" top={screenHeight - 1.1 * cardHeight} left={0.3 * cardWidth}
                                suit="C" width={this.props.cardWidth} score={gameState.game.oddScore} />
            ) : (this.props.player === 4 ? (
              <EuchreScorecards anchor="bottom right" top={screenHeight - 1.1 * cardHeight} left={screenWidth - 1.3 * cardWidth}
                                suit="D" width={this.props.cardWidth} score={gameState.game.evenScore} />
            ) : (null))}
            {/* player hand */}
            <div style={{display: 'none'}}>
              <Stack top={screenHeight} left={screenWidth / 2 - cardWidth / 2} width={this.props.cardWidth}
                     cards={gameState.hand.hands[this.props.player-1]} />
            </div>
          </React.Fragment>
        )}
      </GameContext.Consumer>
    );
  }

});
