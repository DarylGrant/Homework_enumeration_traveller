const Journey = require('../src/journey.js');
const Traveller = require('../src/traveller.js');

describe('Traveller', () => {

    let journey1;
    let journey2;
    let journey3;
    let journey4;
    let traveller;

    beforeEach( () => {
        journey1 = new Journey('Glasgow', 'Perth', 'train', 60);
        journey2 = new Journey('Edinburgh', 'Manchester', 'train', 240);
        journey3 = new Journey('Dundee', 'Stirling', 'bus', 50);
        journey4 = new Journey('London', 'Berlin', 'plane', 120);
        journeys = [journey1, journey2, journey3, journey4];
        traveller = new Traveller(journeys);
    });

    test('should have a collection of journeys', () => {
        expect(traveller.journeys).toEqual(journeys);
      });

    test('should be able to get the journeys start locations', () => {
        const starts = [
          journey1.startLocation,
          journey2.startLocation,
          journey3.startLocation,
          journey4.startLocation,
        ];
        expect(traveller.getJourneyStartLocations()).toEqual(starts);
      });

    test('should be able to get the journeys end locations', () => {
        const ends = [
          journey1.EndLocation,
          journey2.EndLocation,
          journey3.EndLocation,
          journey4.EndLocation,
        ];
        expect(traveller.getJourneyEndLocations()).toEqual(ends);
      });

      test('should be able to get journeys by transport', () => {
        const transportType = [
          journey1,
          journey2,
       
        ];
        expect(traveller.getJourneyByTransport('train')).toEqual(transportType);
      }); 

    });