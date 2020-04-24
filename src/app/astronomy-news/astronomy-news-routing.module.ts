import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AstronomyNewsPage } from './astronomy-news.page';

const routes: Routes = [
  {
    path: '',
    component: AstronomyNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AstronomyNewsPageRoutingModule {}
