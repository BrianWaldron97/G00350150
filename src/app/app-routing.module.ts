import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'animal-crossing-news',
    loadChildren: () => import('./animal-crossing-news/animal-crossing-news.module').then( m => m.AnimalCrossingNewsPageModule)
  },
  {
    path: 'tech-news',
    loadChildren: () => import('./tech-news/tech-news.module').then( m => m.TechNewsPageModule)
  },
  {
    path: 'astronomy-news',
    loadChildren: () => import('./astronomy-news/astronomy-news.module').then( m => m.AstronomyNewsPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
