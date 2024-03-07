const express = require('express');
const Album = require('../models/album');
const mongoose = require('mongoose');
const router = express.Router();

// get all albums
router.get('/', async (req, res) => {
  const albums = await Album.find({}).sort({createdAt: -1});

  res.status(200).json(albums);
});

// get single album
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Album not found'});
  }

  const album = await Album.findById(id);

  if (!album) {
    return res.status(404).json({error: 'Album not found'});
  }

  res.status(200).json(album);
});

// add an album
router.post('/', async (req, res) => {
  const {albumName, artistName, spotifyURI, img, link, rating} = req.body;
  // check if an album with this uri already exists. # need to fix this at some point
  try {
    const album = await Album.create({ albumName, artistName, rating, spotifyURI, img, link })
    res.status(200).json(album);
  } catch (err) {
    res.status(400).json({error: err.message});
  }

});


// delete an album
router.delete('/:id', async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Album not found'});
  }

  const album = await Album.findOneAndDelete({_id: id});

  if (!album) {
    return res.status(404).json({error: 'Album not found'});
  }

  res.status(200).json(album);
});


// modify an album
router.patch('/:id', async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Album not found'});
  }

  const album = await Album.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!album) {
    return res.status(404).json({error: 'Album not found'});
  }

  res.status(200).json(album);
});

module.exports = router;