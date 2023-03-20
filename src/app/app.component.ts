import { Component } from '@angular/core';
import { Card } from './card';
import { CardDataService } from './card-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private cardData: CardDataService) { 
    cardData.changeEmitted$.subscribe(value => {
      this.card.cardholder = value.cardholder ? value.cardholder: this.card.cardholder;
      this.card.cardNumber = value.cardNumber ? value.cardNumber: this.card.cardNumber;
      this.card.expMonth = value.expMonth ? value.expMonth: this.card.expMonth;
      this.card.expYear = value.expYear ? value.expYear: this.card.expYear;
      this.card.cvc = value.cvc ? value.cvc: this.card.cvc;
    })
  }

  card: Card = {
    cardholder: 'Jane Appleseed',
    cardNumber: '0000 0000 0000 0000',
    expMonth: '00',
    expYear: '00',
    cvc: '123'
  };
}
