const Browser = require('zombie');
var app = require('../app');
var assert = require('assert');

Browser.localhost('localhost', 2005);

  describe('User visits the message page', () => {
    const browser = new Browser();

    before(() => {
      return browser.visit('/messages');
    });

    before((done) => {
      browser.clickLink('Hello!', done);
    });

    describe('sees the individual message page', () => {

      it('should be successful', () => {
        browser.assert.success();
      });

      it('should see the individual message', () => {
        browser.assert.text('h3', 'Hello!');
      });
    });
    
  })
