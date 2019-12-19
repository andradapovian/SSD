import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/events/shared/event.service';
import {Event} from 'src/app/events/shared/event.model';
import { NgForm } from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  

  constructor(private service: EventService,
    private firestore: AngularFirestore) {
    
   }

   onSubmit() {
    
    let data = this.service.form.value;
    
   this.service.createEvent(data)
       .then(res => {console.log('event added');
      
    });
  }

  ngOnInit() {
    
  }


}
