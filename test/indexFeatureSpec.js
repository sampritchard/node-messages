const Browser = require('zombie');
var app = require('../app');
var assert = require('assert');

Browser.localhost('localhost', 2005);

  describe('User visits index page', function() {
    const browser = new Browser();

    before(function() {
      return browser.visit('/');
    });

    describe('sees the index page', function() {

      it('should be successful', function() {
        browser.assert.success();
      });

      it('should see the heading', function() {
        browser.assert.text('h2', 'Welcome to The Simple Message App!');
      });

      it('should see the link to the message page', function() {
        browser.assert.text('p', 'See Messages');
      });
    });
  })
