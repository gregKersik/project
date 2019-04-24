import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  loadedFeature: string = 'Recipes';

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
