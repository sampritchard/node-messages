const Browser = require('zombie');
var app = require('../app');
var assert = require('assert');

Browser.localhost('localhost', 2005);

  describe('User visits index page', () => {
    const browser = new Browser();

    before(() => {
      return browser.visit('/');
    });

    describe('sees the index page', () => {

      it('should be successful', () => {
        browser.assert.success();
      });

      it('should see the heading', () => {
        browser.assert.text('h2', 'Welcome to The Simple Message App!');
      });

      it('should see the link to the message page', () => {
        browser.assert.text('p', 'See Messages');
      });
    });
    
  })
