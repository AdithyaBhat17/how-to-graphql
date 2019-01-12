import React, { Component } from 'react'
import axios from 'axios'

const axiosGithubJobs = axios.create({
  baseURL: 'https://jobs.github.com/positions.json?description=react&markdown=true',
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
})

const GET_JOBS = `
  {
    id
    type
    title
    location
    url
    created_at
    description
    how_to_apply
  }
`

class App extends Component {

  componentDidMount(){
    axiosGithubJobs
    .post('', {query: GET_JOBS})
    .then(result => console.log(result))
  }

  render() {
    return (
      <div className="App">
        Hi
      </div>
    );
  }
}

export default App;
