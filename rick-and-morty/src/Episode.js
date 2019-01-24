import React from 'react'
import Navbar from './Navbar';



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

      componentWillMount(){
        this.fetchEpisodes(this.state.page)
      }
    
      componentDidUpdate(prevState){
        if(prevState.page !== this.state.page){
          this.fetchEpisodes(this.state.page)
        }
    }

    render(){
        return(
            <div>
                <Navbar />
                <h1 style={{textAlign:'center'}}>hi, come back later, i'll fix this I promise!</h1>
            </div>
        )
    }
}