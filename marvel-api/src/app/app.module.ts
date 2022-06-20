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
import { CardComicsComponent } from './comics/card-comics/card-comics.component';
import { CardCreatorsComponent } from './creators/card-creators/card-creators.component';
import { CardSeriesComponent } from './series/card-series/card-series.component';
import { CreatorsCardDetailComponent } from './creators/creators-card-detail/creators-card-detail.component';
import { ComicsCardDetailComponent } from './comics/comics-card-detail/comics-card-detail.component';
import { SeriesCardDetailComponent } from './series/series-card-detail/series-card-detail.component';
import { FormsModule } from '@angular/forms';

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
    CardComicsComponent,
    CardCreatorsComponent,
    CardSeriesComponent,
    CreatorsCardDetailComponent,
    ComicsCardDetailComponent,
    SeriesCardDetailComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
