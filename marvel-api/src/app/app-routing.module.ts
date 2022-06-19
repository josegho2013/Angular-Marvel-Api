import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { SeriesComponent } from './series/series.component';
import { CreatorsComponent } from './creators/creators.component';
import { CardDetailComponent } from './characters/card-detail/card-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: CharactersComponent,
  },
  {
    path: 'home',
    component: CharactersComponent,
  },
  {
    path: 'comics',
    component: ComicsComponent,
  },
  {
    path: 'series',
    component: SeriesComponent,
  },
  {
    path: 'creators',
    component: CreatorsComponent,
  },
  {
    path: `home/detail/:id`,
    component: CardDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
