import React from 'react';
import Search from './search';
import Artists from './artists';
import Sort from './sort';

class Home extends React.Component {
  constructor(props){
    super();
    this.state={
      artists: props.artists
    }
    this.AscendingSort = this.AscendingSort.bind(this);
    this.DescendingSort = this.DescendingSort.bind(this);
  }
  AscendingSort(){
    const AscendedArray = this.props.artists.sort((a,b) =>{
      var keyA = a.year;
      var keyB = b.year;
      if(keyA < keyB) return -1;
      if(keyA > keyB) return 1;
      return 0;
    })
    this.setState({
      artists: AscendedArray
    });
  }
  DescendingSort(){
    const DescendedArray = this.props.artists.sort((a,b) =>{
      var keyA = a.year;
      var keyB = b.year;
      if(keyA > keyB) return -1;
      if(keyA < keyB) return 1;
      return 0;
    })
    this.setState({
      artists: DescendedArray
    });
  }
  render() {
   return (
     <div>
     <Search
     onInputChange={this.props.onInputChange}
     onSearch={this.props.onSearch}
     />
     <Sort
        artists={this.props.artists}
        AscendingSort={this.AscendingSort}
        DescendingSort={this.DescendingSort}            
     />
     <Artists
     artists={this.props.artists}
     onSelectedHeart={this.props.onSelectedHeart}
     />
     </div>
     )
 }
}

export default Home;
