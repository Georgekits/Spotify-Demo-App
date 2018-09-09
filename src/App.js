import React from 'react';
import {
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom';
import Home from './home';
import Favorite  from './favorite';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      artists: [],
      favorites: []
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onSelectedHeart = this.onSelectedHeart.bind(this);
  }

  onSelectedHeart(id) {
    const artistsListWithSelected = this.state.artists.map(artist => {
      if (artist.id === id) {
        return {
          ...artist,
          selected: !artist.selected
        }
      }
      return artist;
    });

    this.setState({
      favorites: artistsListWithSelected.filter(artist => artist.selected),
      artists: artistsListWithSelected
    });
  }

  onInputChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  onSearch() {
    const searchUrl = 'http://localhost:3001/artists?q=' + this.state.searchText

    fetch(searchUrl)
      .then(res => res.json())
      .then(artists => {
        const artistsWithSelected = artists.map(artist => {
          return {
            ...artist,
            selected: false
          }
        });
        this.setState({artists: artistsWithSelected});
      })
      .catch(error => alert('pffff'));
  }

  render() {
    const favorites = this.state.favorites;
    const favoritesLength = favorites.length;
    const counterText = favoritesLength > 0
      ? `(${favoritesLength})`
      : '';

    return (
      <BrowserRouter>
        <div className='App'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/favorite'>Favorite{counterText}</Link></li>
          </ul>
          <Route exact path='/' render={() => {
            return <Home
              onInputChange={this.onInputChange}
              onSearch={this.onSearch}
              artists={this.state.artists}
              onSelectedHeart={this.onSelectedHeart}
            />
           }}/>
          
          <Route path='/favorite' render={() => {
            return <Favorite
              favorites={favorites}
              onSelectedHeart={this.onSelectedHeart}
            />
          }} />

        </div>
      </BrowserRouter>
    )
  }
}

export default App;
