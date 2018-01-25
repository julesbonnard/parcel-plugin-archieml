const JSONAsset = require('parcel-bundler/src/assets/JSONAsset');
const archieml = require('archieml');

class ArchieMLAsset extends JSONAsset {
  constructor (name, pkg, options) {
    super(name, pkg, options);
    this.type = 'js'
  }
  parse (code) {
    this.contents = JSON.stringify(archieml.load(code));
  }
}

module.exports = ArchieMLAsset;