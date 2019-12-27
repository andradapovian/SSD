import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Event} from './event.model';
import {FormControl, FormGroup} from '@angular/forms';
import { firestore } from 'firebase';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class EventService {
 
  private dbPath = '/events';

  constructor( private db: AngularFirestore) {  }

  getEventsList(){
    return this.db.collection('events').snapshotChanges();
  }

  addEvent(event: Event): void {
    this.db.collection('events').add(Object.assign(event));
  }
 
  updateEvent(event: Event, id: string) {
   this.db.doc('events/'+id).update(event);
  }

  deleteEvent(id: string){
    this.db.doc('events/' + id).delete();
  }

}
