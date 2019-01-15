import React, { Component } from 'react';

const GET_STUFF = `{
  characters{
    info{
      count
      pages
    }
    results{
      name
      id
      image
      location{
        name
        dimension
      }
      species
      gender
      status
      origin{
        name
      }
    }
  }
  episodes{
    results{
      name
      air_date
      id
      characters{
          name
        	image
      }
      episode
    }
  }
}`


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      characters: [],
      episodes: []
    }
  }

  componentDidMount(){
    fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST', 
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({query: GET_STUFF})
    })
    .then(res => res.json())
    .then(data => {
      let characters = data.data.characters
      let episodes = data.data.episodes
      this.setState({
        characters: characters.results, 
        episodes: episodes.results
      })
    })
  }

  render() {
    return (
      <div className="App">
        hi
      </div>
    );
  }
}

export default App;
