const { expect } = chai;

describe('The proxy server should correctly serve an index.html file that, in turn, correctly mounts all service components, by', () => {
  describe('loading the Reviews service module such that', () => {
    it('it has an element with the id "reviews-module"', () => {
      const targetDOMelement = iframeDOM.getElementById('reviews-module');

      expect(targetDOMelement).to.not.be.null;
    });

    it('it has an element with the id "item-value-reviews" that has inner HTML equal to 19, the hardcoded value for item 100', () => {
      const targetDOMelement = iframeDOM.getElementById('item-value-reviews');
      const { innerHTML } = targetDOMelement;

      expect(innerHTML).to.equal('19');
    });
  });
});
