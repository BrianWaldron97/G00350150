import { Component, OnInit } from '@angular/core';
// Importing both Storage and Geolocation
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  // Variables
  name:string;
  longitude:number;
  latitude:number;

  // ==== Methods ====

  constructor(private storage:Storage, private geolocation:Geolocation) { }
  
  // Method to save name to storage
  // Ran into slight error where the name does not change unless the page is reloaded
  onSave(){
    console.log(this.name);
    this.storage.set("name", this.name);
  }

  // Method that gets current location of latitude and longitude
  getGeolocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude
      this.longitude = resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  ngOnInit() {

  }
}
