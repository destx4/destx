import { Component, OnInit  } from '@angular/core';
import { players } from '../standard.service';
import { StandardService } from '../standard.service';

@Component({
  selector: 'app-rotate',
  templateUrl: './rotate.component.html',
  styleUrls: ['../app.component.css']
})
export class RotateComponent implements OnInit {

  newGroup: players;
  
  constructor(
    private standardService: StandardService
  ) { this.newGroup = new players(); }

rotateplayers: Array<players>;
id: number;


  // Disablers
  EntryDis: boolean;




playerSubmit() {

  console.log(this.rotateplayers.findIndex(x => x.name == 'kevin'));
  if (this.rotateplayers.findIndex(x => x.name == this.newGroup.name ) === -1) {
 // this.EntryDis = true;
 if (this.newGroup) {
   var entry = {
     'name': this.newGroup.name,
     'owed': 0,
     'earned': 0
   };
   this.rotateplayers.push(entry);
 }
  } else { console.log('Already Exists!');}
 
 this.newGroup.name = null;
 console.log(this.rotateplayers.length);
}

playerDelete(id, index) {
  console.log(id);
  this.rotateplayers.splice(index, 1);
  console.log(this.rotateplayers);
}




ngOnInit() {
 // this.EntryDis = false;
this.rotateplayers = [];
this.id = 1;
}
}
