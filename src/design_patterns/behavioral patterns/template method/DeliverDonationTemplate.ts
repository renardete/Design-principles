export abstract class DeliverDonationTemplate {

  deliver(donation: string): string{
    return this.transport(this.pack(this.secure(donation)));
  }

  pack(donation: string): string{
    return `{${donation}}`
  }

  secure(donation: string): string {
    return `$${donation}$`
  }

  abstract transport(donation: string): string;
}