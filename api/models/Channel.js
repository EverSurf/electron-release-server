/**
 * Channel.js
 *
 * @description :: Various release channel (ex. release & dev)
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  attributes: {
    name: {
      type: "string",
      primaryKey: true,
      unique: true,
      required: true,
    },
  },
  autoPK: false,
};
