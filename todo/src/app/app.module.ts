import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

  // Your web app's Firebase configuration
  export const firebaseConfig = {
    apiKey: "AIzaSyAQsTPs3WX8ONJ0-usaRMr_hF5ZbP00uaY",
    authDomain: "todolist-2306f.firebaseapp.com",
    databaseURL: "https://todolist-2306f.firebaseio.com",
    projectId: "todolist-2306f",
    storageBucket: "todolist-2306f.appspot.com",
    messagingSenderId: "1013429867657",
    appId: "1:1013429867657:web:74b2fb02515f3d62346258"
  };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule,
     AngularFireModule.initializeApp(firebaseConfig),
     AngularFireDatabaseModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
