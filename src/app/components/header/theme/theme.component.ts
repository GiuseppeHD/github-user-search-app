import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent implements OnInit {
  storageKey = 'isDark';
  isDark = false;
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    const theme = localStorage.getItem(this.storageKey);
    if (theme) {
      this.isDark = JSON.parse(theme);
    }
  }

  switchTheme() {
    this.isDark = !this.isDark;
    localStorage.setItem(this.storageKey, JSON.stringify(this.isDark));
    this.themeService.setCurrentTheme(this.isDark);
  }
}
