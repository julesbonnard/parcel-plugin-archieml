const { Asset } = require('parcel-bundler');
const JSONAsset = require('parcel-bundler/src/assets/JSONAsset');
const archieml = require('archieml');

class ArchieMLAsset extends JSONAsset {
  constructor (name, pkg, options) {
    super(name, pkg, options);
    this.type = 'js'
  }
  parse (code) {
    this.contents = archieml.load(code);
  }
  generate () {
    return {
      js: `module.exports=${JSON.stringify(this.contents)}`
    }
  }
}

module.exports = ArchieMLAsset;