import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  items: Observable<any[]>;


  constructor(
    public db: AngularFirestore) {
    this.items = db.collection('messages').valueChanges();

  }

  ngOnInit() {
  }
}


