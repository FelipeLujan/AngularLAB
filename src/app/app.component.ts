import {Component, OnInit} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';


import {AuthService} from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  topics: FirebaseListObservable<any[]>;
  user = null;


  constructor(
    private auth: AuthService, public db: AngularFireDatabase) { }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }


  ngOnInit() {
    this.auth.getAuthState().subscribe(
      (user) => this.user = user);
  }
}


