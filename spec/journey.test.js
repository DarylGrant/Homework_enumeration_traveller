const Journey = require('../src/journey.js');

describe('Journey', () => {

    let journey;

    beforeEach( () => {
        journey = new Journey('Glasgow', 'Perth', 'train', 60);
    });

    test('should have a start location', () => {
        expect(journey.startLocation).toBe('Glasgow');
      });
    
    test('should have a end location', () => {
        expect(journey.endLocation).toBe('Perth');
      });
    
    test('should have a mode of transport', () => {
        expect(journey.transport).toBe('train');
      });
    
    test('should have a distance', () => {
        expect(journey.distance).toBe(60);
      });
});