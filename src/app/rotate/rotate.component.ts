import { Component, OnInit  } from '@angular/core';
import { players } from '../standard.service';
import { StandardService } from '../standard.service';

@Component({
  selector: 'app-rotate',
  templateUrl: './rotate.component.html',
  styleUrls: ['./rotate.component.css']
})
export class RotateComponent implements OnInit {

  newGroup: players;
  
  constructor(
    private standardService: StandardService
  ) { this.newGroup = new players(); }

rotateplayers: Array<players>;

  // Disablers
  EntryDis: boolean;




playerSubmit() {
 // this.EntryDis = true;
 if (this.newGroup) {
   var entry = {
     'id': 0,
     'name': this.newGroup.name,
     'owed': 0,
     'earned': 0
   };
   this.rotateplayers.push(entry);
 }
 console.log(this.rotateplayers);
}


ngOnInit() {
 // this.EntryDis = false;
this.rotateplayers = [];
}
}
