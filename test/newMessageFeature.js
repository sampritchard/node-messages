const Browser = require('zombie');
var app = require('../app');
var assert = require('assert');
const mongoose = require('mongoose');
const Message = mongoose.model('Message');

Browser.localhost('localhost', 2005);

  describe('User visits the new message page', function() {
    const browser = new Browser();

    before((done) =>  {
      mongoose.connection.db.dropDatabase(() => {
        done();
      });
    });

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

      it('creates a new message', async() => {
        const message = await new Message({
          message: 'Hello!'
        }).save()
      })
    });
  })
