import React from 'react'
import Navbar from './Navbar';

export default class CharacterDetails extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            character: [],
            loading: false,
            origin: '',
            episode: [],
            location: ''
        }
    }

    componentWillMount(){
        console.log(this.props.match.params.id)
        fetch('https://rickandmortyapi.com/graphql',{
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                query: `
                    query{
                        character(id: ${this.props.match.params.id}){
                            id
                            name
                            image
                            episode{
                                name
                                episode
                                id
                            }
                            location{
                                name
                            }
                            gender
                            origin{
                                name
                            }
                            status
                            species
                        }
                    }
                `
            })
        })
        .then(res => res.json())
        .then(data => {
            let character = data.data.character
            let episode = data.data.character.episode 
            let location = data.data.character.location.name 
            let origin = data.data.character.origin.name
            this.setState({
                character,
                loading: false,
                episode,
                location,
                origin
            })
        })
    }

    render(){
        const { character, loading, episode, location, origin } = this.state
        if(loading === true)
            return <div>loading...</div>
        return(
            <div className="character-details">
                <Navbar />
                {character && (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="thumbnail">
                                    <img src={character.image} alt={character.name}/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="details"> <br/>
                                    <p>
                                        <strong>Name:</strong> {character.name}
                                    </p>
                                    <p>
                                        <strong>Gender:</strong> {character.gender}
                                    </p>
                                    <p>
                                        <strong>Species:</strong> {character.species}
                                    </p>
                                    <p>
                                        <strong>Status:</strong> {character.status}
                                    </p>
                                    <p>
                                        <strong>Origin:</strong> {origin}
                                    </p>
                                    <p>
                                        <strong>Current Location:</strong> {location}
                                    </p>
                                    <p>
                                        <strong>Episodes:</strong> {episode.map(episode => (
                                            <span key={episode.id}>{episode.name} ({episode.episode}), </span>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}