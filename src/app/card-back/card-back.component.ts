import { Component, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card-back',
  templateUrl: './card-back.component.html',
  styleUrls: ['./card-back.component.scss']
})
export class CardBackComponent {
  @Input() card: Card;
}