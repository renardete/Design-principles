import {AirDeliverDonation} from './AirDeliverDonation'
import {TruckDeliverDonation} from './TruckDeliverDonation'


describe('Template method pattern should', () => {
  let airDeliverDonation: AirDeliverDonation;
  let truckDeliverDonation: TruckDeliverDonation;

  beforeAll(() => {
    airDeliverDonation = new AirDeliverDonation();
    truckDeliverDonation = new TruckDeliverDonation();
  })

  test('Air template method return ', () => {
    expect(airDeliverDonation.deliver('food')).toEqual('{$food$}- fly')
  })

  test('Truck template method return ', () => {
    expect(truckDeliverDonation.deliver('food')).toEqual('{$food$}- truck')
  })
})