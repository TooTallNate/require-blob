
/**
 * Module exports.
 */

module.exports = requireBlob;

/**
 * Turns arbitrary binary data into Data URI string that gets exported
 * as a CommonJS-compatible module.
 *
 * @param {Buffer} buf
 * @param {String} mime
 * @return {String}
 * @api public
 */

function requireBlob (buf, mime) {
  if (!mime) mime = 'application/octet-stream';
  return 'module.exports = function(){\n' +
    '  return "data:' + mime + ';base64,' + buf.toString('base64') + '";\n' +
    '};';
}
