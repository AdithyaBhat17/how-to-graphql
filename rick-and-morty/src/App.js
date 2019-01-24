import React, { Component } from 'react';
import Character from './Character';
import Navbar from './Navbar';
// import ReactDOM from 'react-dom'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      characters: [],
      page: 1
    }
  }

  fetchCharacters = (id) => {
    fetch('https://rickandmortyapi.com/graphql?no-cache=1', {
      method: 'POST', 
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        query: `
          query{
            characters(page:${id}){
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
          }
        `})
    })
    .then(res => res.json())
    .then(data => {
      let characters = data.data.characters
      this.setState({
        characters: characters.results
      })
    })
  } 

  nextPage = () => {
    this.setState((prev) => ({page: prev.page + 1 < 25 ? prev.page + 1 : 1}))
  }

  prevPage = () => {
    this.setState((prev) => ({page: prev.page - 1 > 0 ? prev.page - 1 : 25}))
  }

  componentWillMount(){
    this.fetchCharacters(this.state.page)
  }

  componentDidUpdate(prevState){
    if(prevState.page !== this.state.page){
      this.fetchCharacters(this.state.page)
    }
  }

  render() {
    const { characters } = this.state
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <h3>
            Page {this.state.page}
          </h3>
          <div className="row">
            {characters && characters.map(character => (
              <Character 
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              location={character.location}
              status={character.status}
              origin={character.origin}
              gender={character.gender}
              />
            ))}
          </div>
          <div className="page-btns">
            <button
            onClick={this.prevPage}>
              Previous Page
            </button>
            <button
            onClick={this.nextPage}>
              Next Page
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
