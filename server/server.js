require("dotenv").config();
const express = require("express");
const albumRoutes = require('./routes/albumRoutes');
const spotifyRoutes = require('./routes/spotifyRoutes');
const gptRoutes = require('./routes/gptRoutes');
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');

app.use(cors())
// temp middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/album', albumRoutes);
app.use('/api/spotify', spotifyRoutes);
app.use('/api/gpt', gptRoutes);

mongoose.connect(process.env.ATLAS_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected to db and listening on port ' + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  })

