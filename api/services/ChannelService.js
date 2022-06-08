/**
 * Platform Service
 */

var _ = require("lodash");

var ChannelService = {
  availableChannels: sails.config.channels,
};

module.exports = ChannelService;
