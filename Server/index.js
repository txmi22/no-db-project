const express = require('express');
const playlistCtrl = require('./Controllers/playlistController');
const albumCtrl = require('./Controllers/albumController');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

//Playlist Endpoints
app.post('/api/playlists', playlistCtrl.createPlaylist)
app.get('/api/playlists', playlistCtrl.getPlaylist)
app.put('/api/playlists/:id', playlistCtrl.renamePlaylist)
app.delete('/api/playlists/:id', playlistCtrl.deletePlaylist)

//Album Endpoints
app.get('/api/albums', albumCtrl.findAlbum)
app.post('/api/albums/:id', albumCtrl.addAlbum)
app.delete('/api/albums/:id', albumCtrl.deleteAlbum)

const port = 3005;

app.listen(port, () => {console.log(`Server ${port} is online`)})
