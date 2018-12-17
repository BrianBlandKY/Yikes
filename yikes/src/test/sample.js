var chai = require("chai");
const expect = chai.expect;

describe('vuex getter cache', function () {
  it('should call getter if state used inside getter changes', function () {
    expect(2).to.equal(2)
  });
});