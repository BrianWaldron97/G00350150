import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Services/news.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.page.html',
  styleUrls: ['./tech-news.page.scss'],
})
export class TechNewsPage implements OnInit {
  technologyData:any=[];
  constructor(private newsService:NewsService) { 

  }

  ngOnInit() {
    this.newsService.TechNews().subscribe(
      (techData)=>{
        this.technologyData = techData.articles;
      }
    );
  }

}
