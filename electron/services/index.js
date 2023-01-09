/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Main file to export all electron services to main proccess.
 */

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
exports.logger = require('./logger');
exports.squirrel = require('./squirrel');
exports.update = require('./update');
