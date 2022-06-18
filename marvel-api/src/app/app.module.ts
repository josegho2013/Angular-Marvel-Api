import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { CardComponent } from './characters/card/card.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardDetailComponent } from './characters/card-detail/card-detail.component';
import { FooterComponent } from './features/footer/footer.component';
import { SeriesComponent } from './series/series.component';
import { ComicsComponent } from './comics/comics.component';
import { CreatorsComponent } from './creators/creators.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CardComponent,
    NavbarComponent,
    CardDetailComponent,
    FooterComponent,
    SeriesComponent,
    ComicsComponent,
    CreatorsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
