import { Component } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  card: Card;

  setCard(card: Card) {
    console.log(card);
    this.card = card;
  }
}
