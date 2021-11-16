class Traveller  {
    constructor(journeys) {
    this.journeys = journeys;
 }
 getJourneyStartLocations() {
    return this.journeys.map(journey => journey.startLocation);
  }

getJourneyEndLocations() {
    return this.journeys.map(journey => journey.EndLocation);
  }

//   getJourneyByTransport(transport) {
//     return this.journeys.filter((journey) => {
//       return journey.transport === transport;
//     });

}

module.exports = Traveller;