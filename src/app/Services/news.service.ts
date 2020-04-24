import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }

  // News API's that have been altered slighlty to match different results
  GetLatestNews():Observable<any> {
    // Returns the top headlines in Ireland
   return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&apiKey=1a9257574d694f8cbf14efd6e6a61c81');
  }

  AnimalCrossingNews():Observable<any> {
    // Returns all news from the date given with the key word "animalcrossing"
    return this.httpClient.get('http://newsapi.org/v2/everything?q=animalcrossing&from=2020-03-24&sortBy=publishedAt&apiKey=1a9257574d694f8cbf14efd6e6a61c81');
   }

   TechNews():Observable<any> {
     // Returns the top headlines in Ireland with the category technology
    return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&category=technology&apiKey=1a9257574d694f8cbf14efd6e6a61c81');
   }

   AstroNews():Observable<any> {
     // Returns all news with the key word "astronomy"
    return this.httpClient.get('http://newsapi.org/v2/everything?q=astronomy&from=2020-03-24&sortBy=publishedAt&apiKey=1a9257574d694f8cbf14efd6e6a61c81');
   }

}
