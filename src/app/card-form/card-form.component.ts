import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../card';
import { CardDataService } from '../card-data.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnInit {
  constructor(
    private cardData: CardDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
      input.addEventListener('blur', (e: Event) => {
        (<HTMLFormElement>e.target).classList.add('invalid');
      });
    });

    inputs.forEach(input => input.addEventListener('keyup', this.emitCard))

    const expFields = document.querySelectorAll('#expMonth, #expYear');
    expFields.forEach(field => {
      field.addEventListener('keyup', (e: Event) => {
        const element = <HTMLFormElement>e.target;
        element['value'] = this.removeNonDigits(element['value']);
      })
    })
  }

  // * Outputs card data
  @Output() cardEmitter = new EventEmitter<Card>();

  public emitCard = () => {
    const value = {
      cardholder: this.cardholderName,
      cardNumber: this.cardNumber,
      expMonth: this.expMonth,
      expYear: this.expYear,
      cvc: this.cvc,
    }
    
    this.cardData.emitChange(value)
  };

  // * Regex for validation and formating
  private nonNumberRegex: RegExp = /[\D]/g;
  private creditCardRegex: RegExp = /\d{4}|\d{1,3}/g;

  // * Variables
  public cardholderName: string;

  public cardNumber: string;

  public expMonth: string;
  public expYear: string;

  public cvc: string;

  public formatCardNumber = () => {
    this.cardNumber = this.removeNonDigits(this.cardNumber);

    const groupsOfFour = this.cardNumber.match(this.creditCardRegex);

    if (groupsOfFour) {
      this.cardNumber = groupsOfFour.join(' ');
    }
  };

  public formatExpMonth = () => {
    this.expMonth = this.removeNonDigits(this.expMonth);
    const numMonth = Number(this.expMonth);
    if (this.expMonth == '') {
      this.expMonth = '';
    } else if (numMonth > 12 || numMonth < 1) {
      this.expMonth = '12';
    } else if (numMonth < 10) {
      this.expMonth = '0' + this.expMonth;
    }
  };

  public formatExpYear = () => {
    this.expYear = this.removeNonDigits(this.expYear);
    const numYear = Number(this.expYear);
    if (this.expYear == '') {
      this.expYear = '';
    } else if (numYear < 10) {
      this.expYear = '0' + this.expYear;
    }
  };

  public formatCVC = () => {
    this.cvc = this.removeNonDigits(this.cvc);
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

  public navigateToSuccess() {
    this.router.navigate(['success']);
  }
}
