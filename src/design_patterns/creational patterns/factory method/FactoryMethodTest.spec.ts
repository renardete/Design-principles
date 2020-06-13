import { DonationKitFactory } from './Factories/DonationKitFactory'
import {AidKitFactory} from './Factories/AidKitFactory'

describe('factory method', () => {

  let donationFactory: DonationKitFactory = new DonationKitFactory();
  let aidKitFactory: AidKitFactory = new AidKitFactory();

  const expectedThanksDonation : String = "Thanks for this awesome Donation kit"
  const expectedThanksAid : String = "Thanks for this awesome Aid kit"

  test('Donation factory', () => {
    let donationKit = donationFactory.createKit();
    let thanksDonation = donationKit.thankKit()
    expect(thanksDonation).toEqual(expectedThanksDonation)
  })

  test('Aid factory', () => {
    let aidKit = aidKitFactory.createKit();
    let thanksAid = aidKit.thankKit()
    expect(thanksAid).toEqual(expectedThanksAid)
  })
})
