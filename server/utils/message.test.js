const expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('Messages', () => {

  describe('generateMessage', () => {

    it('should generate correct message object', () => {
      let from = 'Jen';
      let text = 'This is a test message.';
      let message = generateMessage(from, text);

      expect(typeof message.createdAt).toBe('number');
      expect(message.from).toBe(from);
      expect(message.text).toBe(text);
    });

  });

  describe('generateLocationMessage', () => {

    it('should generate correct location object', () => {
      let from = 'Mick';
      let lat = 35.456;
      let lng = 35.456;
      let message = generateLocationMessage(from, lat, lng);

      expect(typeof message.createdAt).toBe('number');
      expect(message.from).toBe(from);
      expect(message.url).toBe(`https://www.google.com/maps?q=${lat},${lng}`);
    });

  });

});

