import {SecureHandler} from './handlers/SecureHandler';
import {CompressHandler} from './handlers/CompressHandler';
import { RequestDonation } from './RequestDonation';

describe('Chain of responsability pattern should', () => {
  
  const expectedRequestDonation = 'compress secure';

  let secureHandler: SecureHandler;
  let compressHandler: CompressHandler;
  let donationRequest:  RequestDonation;

  beforeAll(() => {
    secureHandler = new SecureHandler();
    compressHandler = new CompressHandler();
    donationRequest = new RequestDonation();

    compressHandler.setNext(secureHandler);
  })

  test('Compress and secure a donation', () => {
    compressHandler.handle(donationRequest);

    expect(donationRequest.donation.trim()).toEqual(expectedRequestDonation);
  })
})