/**
 * Module dependencies
 */

var HyperStore = require('hyper-store');

hyperStore.requires = ['store-hyper-agent', '$app'];

module.exports = hyperStore;

function hyperStore(Agent, app) {
  var store = new HyperStore(Agent);
  store.on('change', function() {
    app.emit('change');
  });
  return store;
};
