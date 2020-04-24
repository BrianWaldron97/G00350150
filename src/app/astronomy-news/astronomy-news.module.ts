import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AstronomyNewsPageRoutingModule } from './astronomy-news-routing.module';

import { AstronomyNewsPage } from './astronomy-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AstronomyNewsPageRoutingModule
  ],
  declarations: [AstronomyNewsPage]
})
export class AstronomyNewsPageModule {}
