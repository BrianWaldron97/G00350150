import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalCrossingNewsPage } from './animal-crossing-news.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalCrossingNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalCrossingNewsPageRoutingModule {}
