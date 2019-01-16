import React from 'react'

export default class CharacterDetails extends React.Component{
    
    componentDidMount(){
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
        .then(data => console.log(data.data))
    }
    render(){
        return(
            <div>
            hi
                {this.props.match.params.id}
            </div>
        )
    }
}