module.exports = function () {};
module.exports.pitch = function (remainingRequest) {
  this.cacheable(true);
  return 'require(' + JSON.stringify("-!" + require.resolve("style-loader") + '!' + require.resolve("css-loader") +
      '!' + require.resolve("sass-loader") + '!' + require.resolve("./bootstrap-styles.loader.js") + '!' + remainingRequest) + ');';
};
