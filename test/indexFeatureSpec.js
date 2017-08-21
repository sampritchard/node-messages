const Browser = require('zombie');
var app = require('../app');
var assert = require('assert');

Browser.localhost('localhost', 2005);

  describe('User visits index page', function() {
    const browser = new Browser();

    before(function() {
      return browser.visit('/');
    })

    describe('sees the index page', function() {

      it('should see the index page', function() {
      browser.assert.text('p', 'Welcome to Express')
      });
    });

  })
