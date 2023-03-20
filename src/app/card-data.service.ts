import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  private emitChangeSource  = new Subject<Card>();

  changeEmitted$ = this.emitChangeSource.asObservable();

  emitChange(change: Card) {
    this.emitChangeSource.next(change);
  }

  constructor() { 
  }
}
