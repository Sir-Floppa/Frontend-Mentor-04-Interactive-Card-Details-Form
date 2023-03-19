import { Component } from '@angular/core';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent {
  public formatCardNumber = (e: Event) => {
    const creditCardRegex: RegExp = /\d{4}/g;
    const nonNumberRegex: RegExp = /[a-zA-Z]/g;
  };

  public cardNumber: String;
}
