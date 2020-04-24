import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Services/news.service';

@Component({
  selector: 'app-animal-crossing-news',
  templateUrl: './animal-crossing-news.page.html',
  styleUrls: ['./animal-crossing-news.page.scss'],
})
export class AnimalCrossingNewsPage implements OnInit {
  animalCrossingData:any=[];
  constructor(private newsService:NewsService) { 

  }

  ngOnInit() {
    this.newsService.AnimalCrossingNews().subscribe(
      (animalData)=>{
        this.animalCrossingData = animalData.articles;
      }
    );
  }

}
