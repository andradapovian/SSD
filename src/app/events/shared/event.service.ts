import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Event} from './event.model';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  //formdData: Event;

  constructor(private firestore: AngularFirestore) { }

  form = new FormGroup({        
    eName: new FormControl(''),
    location: new FormControl(''),
    startDate: new FormControl(''), 
    endDate: new FormControl(''),
    details: new FormControl(''),
    completed: new FormControl(false)
})

  getEvents(){
  
    return this.firestore.collection('events').snapshotChanges();
  }

  createEvent(data){
    return new Promise<any> ((resolve, reject) =>{
      this.firestore
          .collection("events")
          .add(data)
          .then(res => {}, err => reject(err));
    });
   // return this.firestore.collection('events').add(event);
  }

  updateEvent(event: Event){
    delete event.id;
    this.firestore.doc('events/' + event.id).update(event);
  }

  deleteEvent(eventId: string){
    this.firestore.doc('events/' + eventId).delete();
  }
}
