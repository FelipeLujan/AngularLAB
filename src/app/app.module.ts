import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'environments/environment';


import { AppComponent } from './app.component';
import {AngularFirestore} from 'angularfire2/firestore';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
}
)

export class AppModule { }


