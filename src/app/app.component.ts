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
    cardData.changeEmitted$.subscribe(value => this.card = value)
  }

  card: Card;
}
