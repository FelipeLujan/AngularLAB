import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {FormArray, FormGroup} from '@angular/forms';
import {log} from 'util';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  items: Observable<any[]>;
  name: string;
  message: string;

  constructor(public db: AngularFirestore,
              private httpClient:HttpClient) {
    this.items = db.collection('messages').valueChanges();

  }

  ngOnInit() {
  }

  sendMessage(){
    this.db.collection('messages').add({
      name: this.name,
      message: this.message
    });
    this.message ='';
    console.log(this.name, this.message);
  }
}


