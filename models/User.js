const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    userName: { 
        type: String, 
        required: true, 
        unique: true,
        minlength: 1, 
        maxlength: 280,
    },
    email: {
        type: String, 
        required: true, 
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friend: [
        {
          type: Schema.Types.ObjectId,
          ref: this,
        },
      ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema
  .virtual('friendCount')
  .get(function () {
      return this.friend.length;
  })
;

const User = model('user', userSchema);

module.exports = User;
