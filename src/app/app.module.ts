import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';
import { ThemeComponent } from './components/header/theme/theme.component';
import { CardBodyComponent } from './components/card/card-body/card-body.component';
import { SocialsComponent } from './components/card/card-body/socials/socials.component';
import { MainInfoComponent } from './components/card/card-body/main-info/main-info.component';
import { CardHeaderComponent } from './components/card/card-header/card-header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ThemeService } from './services/theme.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CardComponent,
    ThemeComponent,
    CardBodyComponent,
    SocialsComponent,
    MainInfoComponent,
    CardHeaderComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
