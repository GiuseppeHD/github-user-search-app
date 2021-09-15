import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeService } from './services/theme.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public themeService: ThemeService
  ) {
    this.addCustomSvgs();
    this.themeService.setInitialTheme();
  }

  ngOnInit(): void {}

  private addCustomSvgs() {
    this.matIconRegistry.addSvgIcon(
      'custom_location',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icon-location.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'custom_website',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icon-website.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'custom_twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icon-twitter.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'custom_company',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icon-company.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'custom_sun',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icon-sun.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'custom_moon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icon-moon.svg'
      )
    );
  }
}
