import React from 'react';
import { withTheme } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Chip from '@material-ui/core/Chip';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';

import EuchreScorecards from './EuchreScorecards';
import Hand from '../cards/Hand';
import TrumpPicker from './TrumpPicker';
import { orderHand } from './euchreutils';

export default withTheme(class EuchreTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cardWidth: 0.1
    }
  }

  render() {
    const screenWidth = this.props.screenWidth || visualViewport.width;
    const screenHeight = this.props.screenHeight || visualViewport.height;
    const cardWidth = screenWidth * this.state.cardWidth;
    const cardHeight = cardWidth * 1.4;
    return (
      <div>
        {/* player 1 */}
        <div style={{position: 'absolute', top: (screenHeight - screenWidth) / 2, left: (screenWidth - screenHeight) / 2, width: screenHeight, height: screenWidth, transformOrigin: 'center center', transform: 'rotate(90deg)', pointerEvents: 'none'}}>
          <EuchreScorecards anchor="bottom left" top={screenWidth - 1.3 * cardHeight} left={0.5 * cardWidth} suit="C" width={0.1} />
        </div>
        {/* player 2 */}
        <div style={{position: 'absolute', top: 0, left: 0, width: screenWidth, height: screenHeight, transformOrigin: 'center center', transform: 'rotate(180deg)', pointerEvents: 'none'}}>
        </div>
        {/* player 3 */}
        <div style={{position: 'absolute', top: (screenHeight - screenWidth) / 2, left: (screenWidth - screenHeight) / 2, width: screenHeight, height: screenWidth, transformOrigin: 'center center', transform: 'rotate(270deg)', pointerEvents: 'none'}}>
        </div>
        {/* player 4 */}
        <div style={{position: 'absolute', top: 0, left: 0, width: screenWidth, height: screenHeight, pointerEvents: 'none'}}>
          <EuchreScorecards anchor="bottom right" top={screenHeight - 1.3 * cardHeight} left={screenWidth - 1.5 * cardWidth} suit="D" width={0.1} />
        </div>
      </div>
    );
  }

});
