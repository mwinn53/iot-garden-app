import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

const config = {
  //apiKey: "AIzaSyD6E9OYBX72KCRcnwPAzDjVy8MmDbbEgfw",
  //authDomain: "stackblitzfire.firebaseapp.com",
  databaseURL: "https://garden-80305-default-rtdb.firebaseio.com/",
  //storageBucket: "stackblitzfire.appspot.com",
  //messagingSenderId: "42917465053"
};

@NgModule({
  imports:      [ BrowserModule, AngularFireModule.initializeApp(config), AngularFireDatabaseModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
