import {ComunityShelterAdapter} from './ComunityShelterAdapter'
import {ComunityDonationService} from './ComunityDonationService'

describe("Adapter pattern should", () => {
  let expectedQuantity = 5
  let expectedRecipient = 'Doggy'

  let comunityDonationService = new ComunityDonationService(expectedQuantity)
  let comunityShelterAdapter = new ComunityShelterAdapter(comunityDonationService, expectedRecipient)

  test('Comunity adapter should make request', () => {
    let comunityAdapterResponse = comunityShelterAdapter.makeDonationRequest();
    expect(comunityAdapterResponse.quantityRequest).toEqual(comunityDonationService.quantityRequest)
    expect(comunityAdapterResponse.recipient).toEqual(expectedRecipient);

    expect(comunityAdapterResponse).not.toEqual(comunityDonationService);

  })
})