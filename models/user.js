const { Schema, model } = require('mongoose');
const thoughtSchema = require('./thought');

// Schema to create username model
const usernameSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //look into Mongoose matching validation, must match valid email
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'thought'}
    ],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'user'}
    ],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  });

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.


const user = model('user', usernameSchema);

module.exports = user;