import React, { Component } from 'react';

class SearchAlbum extends Component {

    
    render(){
        const {playlist, addToPlaylist}= this.props
        return(
            <div className="search-album">
                {
                    playlist.map((element, index)=>(
                            <div className="album-background">
                        <div key={index} className="main-album">
                        <span className='image-box'>
                            <img className='image' 
                                src={element.image} 
                                alt={element.artist} 
                                style={{backgroundImage: `url(${element.image})`, height: '200px'}}
                            />
                            <button className="add-btn" onClick={()=>addToPlaylist(index)}>+</button>
                        </span>
                        <div className="name-container">
                            <p className="album"> {element.album} </p>
                            <p className="artist"> {element.artist} </p>
                            <div>
        <audio ref="audio_tag" src="/songs/Post Malone, Swae Lee - Sunflower (Spider-Man Into the Spider-Verse).mp3" controls/>
      </div>
                            </div>
                        </div>
                            </div>  
                    ))
                }
            </div>
        )
    }
}
export default SearchAlbum;