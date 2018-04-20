import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  items: Observable<any[]>;
  name: string = 'Juan';
  message: string = 'Message';
  time: any ;

  constructor(public db: AngularFirestore,
              private httpClient:HttpClient) {
    const query = ref => ref.orderBy('date','asc');
    this.items = db.collection('messages', query).valueChanges();

  }

  ngOnInit() {
  }

  sendMessage(){
    this.time = firebase.firestore.FieldValue.serverTimestamp();
    console.log(this.time);
    this.db.collection('messages').add({
      name: this.name,
      message: this.message,
      date: this.time
    });
    this.message ='';
    console.log(this.name, this.message);
  }
}


