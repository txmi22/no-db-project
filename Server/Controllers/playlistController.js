const albums = require('../musicData/music.json')
let playlists = []
let id = 0

module.exports = {
    createPlaylist: (req, res) => {
        const {name, song} = req.body
        const {album, image, artist, id} = song
        const playlist = {
            name: name,
            song: {id, album, image, artist}
        }
        playlists.push(playlist)
        res.status(200).send(playlists)
    },
    getPlaylist: (req, res) => {
        res.status(200).send(playlists)
    },
    renamePlaylist: (req, res) => {
        let {id} = req.params
        let { name} = req.body
        console.log(req.body.name)
        let index = playlists.findIndex(value => value.song.id === +id)
        playlists[index].name = name 

        res.status(200).send(playlists)
    },
    deletePlaylist: (req, res) => {
        const {id} = req.params
        let index = playlists.findIndex(value => value.song.id === +id)
        console.log(index)
        playlists.splice(index, 1)
        res.status(200).send(playlists)
    }
}