import React from 'react'
import { Link } from 'react-router-dom'

export default function Episodes({id, name, episode, characters}){
    return(
        <Link className="col-md-2 col-6" to={`/episode/${id}`}>
            <div>
                <div className="thumbnail">
                    <img className="epi-img" src={require('../src/assets/rickandmorty.png')} alt={name}/>
                </div>
                <p className="char-link"><span>{name}</span> <span>{episode}</span></p>
            </div>
        </Link>
    )
}