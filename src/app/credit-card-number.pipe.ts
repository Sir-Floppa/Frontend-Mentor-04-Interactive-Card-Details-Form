import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardNumber'
})
export class CreditCardNumberPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let format = /(\d{4})|\d{1,3}/g;
    const matches = value.match(format);

    if(matches) {
      for(let i = 0; i < matches.length; i++) {
        matches[i] += '0'.repeat(4 - matches[i].length)
      }
      for(let j = matches.length; j < 4; j++) {
        matches.push('0000');
      }

      return matches.join(' ');
    }

    return '0000 0000 0000 0000';
  }

}
