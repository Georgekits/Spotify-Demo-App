import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div>
        <input type="text" onChange={this.props.onInputChange} />
        <button className="btn-small" onClick={this.props.onSearch}>
          Search
        </button>
      </div>
    );
  }
}

export default Search;
