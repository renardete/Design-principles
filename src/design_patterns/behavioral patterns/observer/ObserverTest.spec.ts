import {DonationCenterPublisher} from './DonationCenterPublisher'
import {Shelter} from './Shelter'

describe('Observer pattern should',() => {

  let subscribers: Shelter[];
  let donationCenter: DonationCenterPublisher;

  beforeAll(() => {
    donationCenter = new DonationCenterPublisher();
    subscribers = []
    subscribers.push(new Shelter())
    subscribers.push(new Shelter())
    subscribers.push(new Shelter())
    subscribers.forEach(subscriber => {
      donationCenter.subscribe(subscriber);
    })
  })

  test('subscribers should start be updated with the same last donation', () => {
    donationCenter.updateLastDonation('firstDonation')
    subscribers.forEach(subscriber => {
      expect(subscriber.lastDonationMade).toEqual('firstDonation')
    })
  })
})