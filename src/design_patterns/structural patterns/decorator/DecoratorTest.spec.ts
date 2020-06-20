import {SecurityDecorator} from './decorators/SecurityDecorator'
import {PretifyDecorator} from './decorators/PretifyDecorator'
import {Package} from './Package'
import { IDonation } from './IDonation'

describe('Decorator pattern should', () => {

  let namePack = 'food'
  let expectedPackageName = 'foodpack-pretty-secure';
  let packageDonation: IDonation;

  beforeAll(() => {
    packageDonation = new Package(namePack);
    packageDonation = new SecurityDecorator(packageDonation);
    packageDonation = new PretifyDecorator(packageDonation);
    packageDonation = packageDonation.package('pack');
    
  })

  test('packa donation should have', () => {
    let packageDonationCast = packageDonation as Package;
    expect(packageDonationCast.name).toEqual(expectedPackageName)
  })
})