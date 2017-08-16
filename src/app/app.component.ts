import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    loaderFeature = 'recipe';

    ngOnInit(){
      firebase.initializeApp({
        apiKey: "AIzaSyA35vVh0vukM8ydlEgPXPNNk4y73QO5Zo8",
        authDomain: "ng-recipe-book-dbbdd.firebaseapp.com"
      });
    }

    onNavigate(feature: string){
      this.loaderFeature = feature;
    }

}
