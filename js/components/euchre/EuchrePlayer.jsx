import React from 'react';
import { withTheme } from '@material-ui/core/styles';

import EuchreScorecards from './EuchreScorecards';
import Stack from '../cards/Stack';

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
      <React.Fragment>
        {this.props.player === this.props.dealer ? (
          <Stack top={screenHeight - 1.3 * cardHeight} left={screenWidth / 2 - cardWidth / 2} width={this.props.cardWidth} hRange={0.05} vRange={0.05} rRange={1} cards={[{cardFace: 'AH', faceDown: true}, {cardFace: 'QH', faceDown: true}, {cardFace: '9S', faceDown: true}, {cardFace: 'JC', faceDown: false}]} />
        ) : (null)}
        {this.props.player === 1 ? (
          <EuchreScorecards anchor="bottom left" top={screenHeight - 1.1 * cardHeight} left={0.3 * cardWidth} suit="C" width={this.props.cardWidth} />
        ) : (this.props.player === 4 ? (
          <EuchreScorecards anchor="bottom right" top={screenHeight - 1.1 * cardHeight} left={screenWidth - 1.3 * cardWidth} suit="D" width={this.props.cardWidth} />
        ) : (null))}
      </React.Fragment>
    );
  }

});
