import {Donation} from './Donation'
import {RegisteredDonation} from './states/RegisteredDonation'

describe('State pattern should', () => {

  let donation: Donation;
  let registeredDonationState: RegisteredDonation;

  beforeAll(() => {
    donation = new Donation();
    registeredDonationState = new RegisteredDonation(donation)
    donation.changeState(registeredDonationState)
  })

  test('donation should have registered state', () => {
    expect(donation.state!.stage).toEqual('registered')
  })

  test('donation should have requested state after donation process call', () => {
    donation.processDonation()
    expect(donation.state!.stage).toEqual('requested')
  })

  test('donation should have requested state after donation process call', () => {
    donation.processDonation()
    expect(donation.state!.stage).toEqual('delivered')
  })
})