import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalCrossingNewsPageRoutingModule } from './animal-crossing-news-routing.module';

import { AnimalCrossingNewsPage } from './animal-crossing-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalCrossingNewsPageRoutingModule
  ],
  declarations: [AnimalCrossingNewsPage]
})
export class AnimalCrossingNewsPageModule {}
