import React from 'react'
import { Link } from 'react-router-dom'

export default class Character extends React.Component{
    render(){
        const { id, name, image } = this.props
        return(
            <Link className="col-md-2 col-6" to={`/character/${id}`}>
                <div>
                    <div className="thumbnail">
                        <img src={image} alt={name}/>
                    </div>
                    <p className="char-link"><span>{name}</span> <span> ></span></p>
                </div>
            </Link>
            
        )
    }
}