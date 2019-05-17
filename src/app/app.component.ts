import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project';

  loadedFeature: string = 'Recipes';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAFXi1sRM8zSzMvE7Ofz7exIB5wjWiMIfQ",     
      authDomain: 'ng-recipe-book-de715.firebaseapp.com'
    })
  }
  onTypeChosen(feature){
    this.loadedFeature = feature;
  }

  display(feature){
    
    if (this.loadedFeature == feature) {
      // console.log('display '+ type);
      return true;
    }
  }
}
