var Mocha = require("mocha");

let mocha = new Mocha({
  ui: 'bdd',
  reporter: 'list'
});

/*
  Use this runner when you need to reference globals for unit testing.
  Ideally, this would the primary runner for all mocha tests but
  this is yet to be determined.
*/

mocha.globals(['']);
mocha.addFile('src/test/sample.js');
mocha.run();
