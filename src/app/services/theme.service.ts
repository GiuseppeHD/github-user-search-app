import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() {}

  setCurrentTheme(isDark: boolean) {
    if (isDark) this.currentTheme.next('dark-theme');
    else this.currentTheme.next('light-theme');
  }

  setInitialTheme() {
    const value = localStorage.getItem('isDark');
    if (value) {
      const isDark = JSON.parse(value);
      this.setCurrentTheme(isDark);
    } else {
      this.currentTheme.next('light-theme');
    }
  }
}
