import {DonationServiceProxy} from './DonationServiceProxy'
import {Donation} from './Donation'
import {DonationService} from './DonationService'

describe('Proxy pattern should', () => {

  let proxyDonation: DonationServiceProxy;
  let donationOne: Donation;
  let donationTwo: Donation;

  beforeAll(() => {
    proxyDonation = new DonationServiceProxy(new DonationService()) ;
    donationOne = new Donation()
    donationTwo = new Donation()
  })

  test('Proxy should have Donation one cache', () => {
    expect(donationOne.donated).toBeFalsy();
    expect(proxyDonation.cache).toBeUndefined();
    proxyDonation.donate(donationOne);
    expect(donationOne.donated).toBeTruthy();
    expect(proxyDonation.cache).toEqual(donationOne)
  })

  test('Proxy should have Donation two cache', () => {
    expect(proxyDonation.cache).toEqual(donationOne)
    expect(donationTwo.donated).toBeFalsy();
    proxyDonation.donate(donationTwo);
    expect(donationTwo.donated).toBeTruthy();
    expect(proxyDonation.cache).toEqual(donationTwo)
  })
})