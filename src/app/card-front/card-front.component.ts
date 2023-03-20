import { Component, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card-front',
  templateUrl: './card-front.component.html',
  styleUrls: ['./card-front.component.scss']
})
export class CardFrontComponent {
  @Input() card: Card;
}
