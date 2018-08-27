import React, { Component } from 'react';
import { Reveal, Search } from 'semantic-react-ui';

class Search extends Component {

state = {
  searchTerm: '',
  showBar: false
}

  render() {
    return (
      <Reveal animated='small fade'>
        <Reveal.Content visible>
          Search feelings?
        </Reveal.Content>
        <Reveal.Content hidden>
         <Search/>
        </Reveal.Content>
    </Reveal>
    );
  }

}

export default Search;
