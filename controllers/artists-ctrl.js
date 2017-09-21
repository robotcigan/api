const Artist = require('../models/artist');

class ArtistsController {
  constructor() {}

  getArtists(req, res, next) {
    let skip = 5;
    let limit = 5;
    let page = req.param('page');
    Artist.getArtists(page * skip, limit)
      .then(artists => {
        res.send({ artists: artists});
      })
      .catch(err => next(err));
  }
}

module.exports = new ArtistsController();