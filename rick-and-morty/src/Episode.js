import React from 'react'
import Navbar from './Navbar';
import Episodes from './Episodes';



export default class Episode extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
        episodes: [],
        page: 1
        }
    }

    fetchEpisodes = (id) => {
        fetch('https://rickandmortyapi.com/graphql?no-cache=1', {
          method: 'POST', 
          mode: 'cors',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            query: `
              query{
                episodes(page:${id}){
                    results{
                        name
                        id
                        episode
                        air_date
                        characters{
                          image
                          name
                          id
                        }                        
                    }
                }
              }
            `})
        })
        .then(res => res.json())
        .then(data => {
          let episodes = data.data.episodes
          this.setState({
            episodes: episodes.results
          })
        })
      } 

      nextPage = () => {
        this.setState((prev) => ({page: prev.page + 1 < 2 ? prev.page + 1 : 1}))
      }
    
      prevPage = () => {
        this.setState((prev) => ({page: prev.page - 1 > 0 ? prev.page - 1 : 2}))
      }

      componentWillMount(){
        this.fetchEpisodes(this.state.page)
      }
    
      componentDidUpdate(prevState){
        if(prevState.page !== this.state.page){
          this.fetchEpisodes(this.state.page)
        }
    }

    render(){
      const {episodes} = this.state
        return(
            <div>
              <Navbar />
              <div className="container">
                <h3>
                  Page {this.state.page} / 2
                </h3>
                <div className="row">
                  {episodes && episodes.map(episode => (
                    <Episodes 
                    key={episode.id}
                    id={episode.id}
                    name={episode.name}
                    episode={episode.episode}
                    characters={episode.characters}
                    airdate={episode.air_date}
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
        )
    }
}