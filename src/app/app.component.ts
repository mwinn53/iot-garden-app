import { Component, VERSION } from '@angular/core';
import { FirebaseApp } from '@angular/fire/compat';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'IOT Garden App. Written in Angular ' + VERSION.major;

  constructor(public app: FirebaseApp) {
    
  }
}
