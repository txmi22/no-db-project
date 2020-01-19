albums = require('../musicData/music.json')
let id = 0

module.exports = {
    findAlbum: (req, res) => {
        res.status(200).send(albums)
    },
    addAlbum: (req, res) => {
        const {song, artist} = req.body
        let album = {
            id,
            song,
            artist
        }
        albums.push(album)
        id++
        res.status(200).send(albums)
    },
    deleteAlbum: (req, res) => {
        const {id} = req.params
        let index = albums.findIndex(value => value.id === +id)
        albums.splice(index, 1)
        res.status(200).send(albums)
    }
}