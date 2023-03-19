import { Component } from '@angular/core';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent {
  // * Regex for validation and formating
  private nonNumberRegex: RegExp = /[\D]/g;
  private creditCardRegex: RegExp = /\d{4}|\d{1,3}/g;

  // * Variables
  public cardholderName: string;

  public cardNumber: string;

  public expMonth: string;
  public expYear: string;

  public cvc: number;

  public formatCardNumber = () => {
    this.cardNumber = this.removeNonDigits(this.cardNumber);

    const groupsOfFour = this.cardNumber.match(this.creditCardRegex);
    console.log(groupsOfFour);

    if (groupsOfFour) {
      this.cardNumber = groupsOfFour.join(' ');
    }
  };

  public formatExpMonth = () => {
    const numMonth = Number(this.expMonth);
    if(numMonth > 12 || numMonth < 1) {
      this.expMonth = '01'
    }
    if (numMonth < 10) {
      this.expMonth = '0' + this.expMonth;
    }
  };

  public formatExpYear = () => {
    const numYear = Number(this.expYear);
    if (numYear < 10) {
      this.expYear = '0' + this.expYear;
    }
  };

  private removeNonDigits = (str: string) => {
    const notNumbers = str.match(this.nonNumberRegex);

    if (notNumbers) {
      return (str = str
        .split('')
        .filter((char) => notNumbers?.indexOf(char) < 0)
        .join(''));
    }
    return str;
  };
}
