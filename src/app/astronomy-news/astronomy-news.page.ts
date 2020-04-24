import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Services/news.service';

@Component({
  selector: 'app-astronomy-news',
  templateUrl: './astronomy-news.page.html',
  styleUrls: ['./astronomy-news.page.scss'],
})
export class AstronomyNewsPage implements OnInit {
  astronomyData:any=[];
  constructor(private newsService:NewsService) { 

  }

  ngOnInit() {
    this.newsService.AstroNews().subscribe(
      (astroData)=>{
        this.astronomyData = astroData.articles;
      }
    );
  }

}
