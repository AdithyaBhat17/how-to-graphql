import React from 'react'

export default class CharacterDetails extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            character: [],
            loading: true
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
            this.setState({character, loading: false})
        })
    }

    render(){
        const { character, loading } = this.state
        if(loading === true)
            return <div>loading...</div>
        return(
            <div className="character-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="thumbnail">
                                <img src={character.image} alt={character.name}/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="details">
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
                                    <strong>Origin:</strong> {character.origin.name}
                                </p>
                                <p>
                                    <strong>Current Location:</strong> {character.location.name}
                                </p>
                                <p>
                                    <strong>Episodes:</strong> {character.episode.map(episode => (
                                        <span key={episode.id}>{episode.name} ({episode.episode}), </span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}