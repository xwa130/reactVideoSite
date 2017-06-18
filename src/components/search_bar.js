import React, {Component} from 'react';

class SearchBar extends Component {
  constructor (props) {
    super(props);
    this.state = {term: ''};
    this.onChange = this.onChange.bind(this);
  }

  onChange (term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render () {
    console.log('Rendering <SearchBar />');
    return (
      <div className='search-bar'>
        <input autoFocus value={this.state.term} onChange={e => this.onChange(e.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
