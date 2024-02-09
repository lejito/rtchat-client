import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChatColor } from '../types/ChatColor';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  private _isLoading = new BehaviorSubject<boolean>(false);

  get isLoading(): Observable<boolean> {
    return this._isLoading.asObservable();
  }

  set isLoading(value: boolean) {
    this._isLoading.next(value);
  }

  private _chatColors: ChatColor[] = [
    { name: 'White', value: '#ecf0f1' },
    { name: 'Yellow', value: '#f4d03f' },
    { name: 'Blue', value: '#2e86c1' },
    { name: 'Red', value: '#c0392b' },
    { name: 'Green', value: '#229954' },
    { name: 'Orange', value: '#e67e22' },
    { name: 'Purple', value: '#884ea0' },
    { name: 'Pink', value: '#f06292' },
  ];

  get chatColors(): ChatColor[] {
    return this._chatColors;
  }
}
