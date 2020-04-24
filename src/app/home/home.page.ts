import { Component, OnInit } from '@angular/core';

// Importing storage
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
firstName:string;
  constructor(private storage:Storage) {}

  // stores the "name"
  ngOnInit() {
    this.storage.get("name").then(
      (data)=>{this.firstName = data;}
    ).catch(
      (error)=>{console.log(error);}
    );
  }
}
