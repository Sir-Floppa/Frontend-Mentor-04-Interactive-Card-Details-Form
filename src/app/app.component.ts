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
      this.card.cardholder = value.cardholder ? value.cardholder: 'Jane Appleseed';
      this.card.cardNumber = value.cardNumber ? value.cardNumber: '0000 0000 0000 0000';
      this.card.expMonth = value.expMonth ? value.expMonth: '00';
      this.card.expYear = value.expYear ? value.expYear: '00';
      this.card.cvc = value.cvc ? value.cvc: '123';
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
