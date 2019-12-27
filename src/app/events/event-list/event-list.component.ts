import { Component, OnInit } from '@angular/core';
import {Event} from 'src/app/events/shared/event.model';
import {EventService} from 'src/app/events/shared/event.service';
import {map} from 'rxjs/operators';
  
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

 events: Event[];
 editState: boolean = false;
 eventToEdit: Event;

 constructor(private eventService: EventService){}

 ngOnInit(){
   this.getEventsList();
 }

 getEventsList(){
   this.eventService.getEventsList()
   .subscribe(
     data => {
       this.events = data.map((e:any) =>{
         return {
           id: e.payload.doc.id, ...e.payload.doc.data()
         } as Event;
       })
     });
 }

 editEvent(eventu, event: Event){
   this.editState = true;
   this.eventToEdit = event
 }

 clearState() {
  this.editState = false;
  this.eventToEdit = null;
}

  updateEvent(event: Event, id: string)  {
    this.eventService.updateEvent(event, id);
    this.clearState();
  }

  deleteEvent(id: string){
    this.eventService.deleteEvent(id);
  }

}
