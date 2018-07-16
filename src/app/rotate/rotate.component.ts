import { Component, OnInit  } from '@angular/core';
import { Players } from '../standard.service';

@Component({
  selector: 'app-rotate',
  templateUrl: './rotate.component.html',
  styleUrls: ['./rotate.component.css']
})
export class RotateComponent implements OnInit {

  constructor() { }

  // Disablers
  EntryDis: boolean;

playerSubmit() {
  this.EntryDis = true;
}


ngOnInit() {
  this.EntryDis = false;

}
}
