import React, {Component} from 'react';

class SearchBar extends Component {
  constructor (props) {
    super(props);
    this.state = {term: ''};
    this.onChange = this.onChange.bind(this);
  }

  onChange (event) {
    this.setState({term: event.target.value});
  }

  render () {
    console.log('Rendering <SearchBar />');
    return (
      <div>
        <input autoFocus value={this.state.term} onChange={this.onChange} />
        Value: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
