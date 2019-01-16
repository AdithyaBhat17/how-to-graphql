import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from  'react-router-dom'

import App from './App'
import CharacterDetails from './CharacterDetails'

export default class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Fragment>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/character/:id" component={CharacterDetails} />
                </Fragment>
            </Router>
        )
    }
}
