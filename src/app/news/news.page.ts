import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  newsData:any=[];
  constructor(private newsService:NewsService) { 

  }

  ngOnInit() {

    // Get the lastest news from the atricles array
    this.newsService.GetLatestNews().subscribe(
      (data)=>{
        this.newsData = data.articles;
      }
    );

  }

}
