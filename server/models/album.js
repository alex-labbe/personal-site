const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    albumName: {type: String, required: true},
    artistName: {type: String, required: true},
    rating: {type: Number, required: true},
    spotifyURI: {type: String, required: true, unique: true},
    img: {type: String, required: true},
    link: {type: String, required: true}
    }, { timestamps: true}
);

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;