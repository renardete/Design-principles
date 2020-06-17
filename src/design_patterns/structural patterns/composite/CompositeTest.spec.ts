import {DonationPackage} from './DonationPackage'
import {DonationProduct} from './DonationProduct'

describe('Composite pattern should', () => {

  let expectedFoodName = 'food';
  let expectedMedicineName = 'medicine';

  let donationPackage: DonationPackage;
  let donationFoodPackage: DonationProduct
  let donationMedicinePackage: DonationProduct

  beforeAll(() => {
    let donationSubpackage = new DonationPackage();
    donationFoodPackage = new DonationProduct(expectedFoodName)
    donationMedicinePackage = new DonationProduct(expectedMedicineName)
    donationPackage = new DonationPackage();

    donationPackage.addDonation(donationFoodPackage);
    donationSubpackage.addDonation(donationMedicinePackage);
    donationPackage.addDonation(donationSubpackage);
  })

  test('Package product should contain several donation and package products', () => {
    expect(donationPackage.children.length).toEqual(2)
    expect(donationPackage.children[0].donate()).toEqual(donationFoodPackage)
  })

  test('Sub package has 2 Donation elements', () => {
    let subPackage = donationPackage.children[1] as DonationPackage
    expect(subPackage.children.length).toEqual(1)
    expect(subPackage.children[0].donate()).toEqual(donationMedicinePackage)
  })
  
})