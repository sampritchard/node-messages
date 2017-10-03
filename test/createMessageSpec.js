const Browser = require('zombie');
var app = require('../app');
var assert = require('assert');
const mongoose = require('mongoose');
const Message = mongoose.model('Message');

Browser.localhost('localhost', 2005);

  describe('User visits the new message page', function() {
    const browser = new Browser();

    before(function() {
      return browser.visit('/messages/new');
    });

    describe('sees the new message page', function() {

      it('should be successful', function() {
        browser.assert.success();
      });

      it('should see a new message form', function() {
        browser.assert.element('form');
      });

      it('should allow the user to enter a message', async () => {
        browser.fill('message', 'Hello World');
        await browser.pressButton('Save');
      })

      it('returns to the message page', async() => {
        browser.assert.text('.messages', 'Hello! Hello World')
      })


    });
  })
