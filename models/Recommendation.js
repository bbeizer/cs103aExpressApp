'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var playlistSchema = Schema( {
  userId: ObjectId,
  songId: ObjectId,
  name: String, 
} );

module.exports = mongoose.model( 'Playlist', playlistSchema );
