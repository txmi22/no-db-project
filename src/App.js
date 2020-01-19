import React, { Component } from 'react';
import Header from './Components/Header'
import Body from './Components/Body';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super (); 
    this.state = {
      playlist: [],
    }
    this.deleteAlbum = this.deleteAlbum.bind(this)
  }

componentDidMount() {
    axios.get('/api/albums/')
    .then(res=> {
      this.setState({playlist: res.data })
    }).catch(err => console.log(err))
  }

deleteAlbum(id) {
    axios.delete(`/api/albums/${id}`)
    .then(res=> {
      this.setState({playlist: res.data})
    }).catch(err => console.log(err))
  }


render() {
    const {playlist} = this.state
    return(
      <div className="App">
        <Header />
        <Body playlist={playlist} />
      </div>
    )
  }
}

export default App;
