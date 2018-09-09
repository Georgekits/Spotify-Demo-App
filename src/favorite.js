import React from 'react';
import Artists from './artists';

class Favorite extends React.Component {
  render() {
    if (this.props.favorites.length <= 0) {
      return 'Add artist';
    }

    return (
      <Artists
        artists={this.props.favorites}
        onSelectedHeart={this.props.onSelectedHeart}
      />
    );

  }
}
export default Favorite;

