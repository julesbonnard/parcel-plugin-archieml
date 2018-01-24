module.exports = function(bundler) {
  bundler.addAssetType('txt', require.resolve('./ArchieMLAsset'));
};