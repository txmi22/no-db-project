import React, { Component } from 'react';
import SearchAlbum from './SearchAlbum';
import axios from 'axios'
import '../App.css';
import WelcomePage from './WelcomePage';

class Body extends Component {
    constructor(){
        super();
        this.state = {
            editToggle: true,
            bodyList: [],
            input: '',
            welcomeToggle: true
        }
    }
    componentDidMount(){
        axios.get('/api/playlists').then(res =>{
            this.setState({bodyList: res.data})
        })
    }
    addToPlaylist = index => {
        const {playlist} = this.props
        const list = {
            name: 'Playlist 1',
            song: {id: playlist[index].id, album: playlist[index].album, image: playlist[index].image, artist: playlist[index].artist}
            
        }
        axios.post('/api/playlists', list).then(res =>{
            this.setState({bodyList: res.data}, ()=>{
                console.log(res.data)
            })
        })
    }

    saveButton = (id, body)=>{
        body.name = this.state.input
        axios.put(`/api/playlists/${id}`, body).then(res=>{
         this.setState({bodyList: res.data})
         this.editButton()
        })   
    }

    editButton = ()=>{
        
        this.setState({editToggle: !this.state.editToggle})
    }

    handleChange = ({value, name}) =>{
        this.setState({[name]:value})
    }

    deleteFromPlaylist = index => {
        const {playlist} = this.props
        playlist.splice(index, 1);
        this.setState({
            bodyList: this.state.bodyList
    })
}

    deleteFromlist = index => {
        const {bodyList} = this.state
        let id = bodyList[index].id
        console.log(bodyList,id)
        axios.delete(`/api/playlists/${id}`).then(res => {
            this.setState({bodyList: res.data})
        })
    }

    turnOff = () => this.setState({welcomeToggle: !this.state.welcomeToggle})
    render() {
        const {playlist} = this.props
        const {welcomeToggle} = this.state
        console.log(this.state.bodyList)
        return(
            <div className="body">
                < WelcomePage welcomeToggle = {welcomeToggle} turnOff={this.turnOff} />
                { !welcomeToggle && <SearchAlbum playlist={playlist}
                             addToPlaylist={this.addToPlaylist}
                             deleteFromPlaylist={this.deleteFromPlaylist} />}
                <div className="playlist-one">
                    {this.state.bodyList.length!==0?<div>{this.state.editToggle?<div className="edit-name">{this.state.bodyList[0].name}</div>:
                    
                    <div>
                        <input className="playlist-name" 
                    onChange={(e)=>this.handleChange(e.target)} value={this.state.input}name="input"></input>
                    
                    <button className="save" onClick={()=>this.saveButton(this.state.bodyList[0].song.id,this.state.bodyList[0])}>Save</button></div>}
                    
                    <button className="edit" onClick={this.editButton}>Edit</button>
                    </div>:null}
                    
                        <div className="title">{
                            this.state.bodyList.map((element, index)=>(

                        <div key={index} className="playlist-container">
                            
                            <span>
                                <img className="image"
                                 src={element.song.image} 
                                 alt={element.song.artist} 
                                 style={{ backgroundImage: `url(${element.song.image})`, height: '200px' }}
                                />
                            </span>
                                <div className="playlist-album">
                                <p className="album"> {element.song.album} </p>
                                <p className="artist"> {element.song.artist} </p>
                                <button className="delete-btn" onClick={()=>this.deleteFromlist(index)}>x</button>
                                </div>
                        </div>
                    ))
                        }</div>
                </div>
                    <div>
                </div>
            </div>
        )
    }
}
export default Body;