import React from 'react';
import Artist from './artist';

class Artists extends React.Component {
  render() {
    return (
      <div className='artists'>
        <ul>
          {
            this.props.artists.map(artist => {
              return <Artist
                key={artist.id}
                artist={artist}
                onSelectedHeart={this.props.onSelectedHeart}
              />
            })
          }
        </ul>
      </div>
    )

  }
}

export default Artists;
