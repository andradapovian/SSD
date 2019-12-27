import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/events/shared/event.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Event} from 'src/app/events/shared/event.model';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {

  event: Event = {
    key:'',
    name:'',
    location:'',
    startDate:new Date(),
    endDate:new Date(),
    details:'',
  }
submitted = false;
 

  constructor(private service: EventService) { }

  ngOnInit() {}

   newEvent(): void{
     this.submitted=false;
     this.event=new Event();
   }
  
   save(){
     this.service.addEvent(this.event);
     this.event = new Event();
   }

   onSubmit() {
    this.submitted = true;
    this.save();
  }

 
}
