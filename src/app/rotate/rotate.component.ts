import { Component, OnInit  } from '@angular/core';
import { players, teams, scorevals } from '../standard.service';
import { StandardService } from '../standard.service';
import { MatSnackBar } from '@angular/material'

@Component({
  selector: 'app-rotate',
  templateUrl: './rotate.component.html',
  styleUrls: ['../app.component.css']
})
export class RotateComponent implements OnInit {

  newGroup: players;
  
  constructor(
    private standardService: StandardService,
    public snackBar: MatSnackBar
  ) { this.newGroup = new players(); }

rotateplayers: Array<players>;
set1rotateteams: Array<teams>;
set2rotateteams: Array<teams>;
set3rotateteams: Array<teams>;
scores: Array<scorevals>;
id: number;


  // Disablers
  RemDis: boolean;
  LockDis: boolean;
  AddDis: boolean;
  SixDis: boolean;
  FinalDis: boolean;
  PayoutDis: boolean;
  ValsDis: boolean;




playerSubmit() {
if (this.rotateplayers.length <= 3) { 
  if (this.rotateplayers.findIndex(x => x.name == this.newGroup.name ) === -1) {
 if (this.newGroup) {
   var entry = {
     'name': this.newGroup.name,
     'r_owed': 0,
     'b_owed': 0,
     'g_owed': 0,
     's_owed': 0,
     'r_earned': 0,
     'b_earned': 0,
     'g_earned': 0,
     's_earned': 0,
     'total_earned': 0
   };
   this.rotateplayers.push(entry);
 }
  } else { this.snackBar.open('This name already exists, enter a different one.', 'Close', {duration: 2000});
    console.log('Already Exists!');}
 
 this.newGroup.name = null;
if (this.rotateplayers.length === 4) {
this.AddDis = true;
this.RemDis = false;
this.LockDis = false;
}


} else {
  this.snackBar.open('The max amount of players for Rotate is 4.', 'Close', {duration: 2000});
}

}

playerDelete(id, index) {
  console.log(id);
  this.rotateplayers.splice(index, 1);
  console.log(this.rotateplayers);
  if (this.rotateplayers.length < 4) {
    this.AddDis = false;
    this.RemDis = false;
    this.LockDis = true;
    }
}

lockPlayers () {
    this.RemDis = true;
    this.AddDis = true;
    this.LockDis = true;
      this.set1rotateteams.push({
        'team_id': '01',
        'p1_name': this.rotateplayers[0].name,
        'p2_name': this.rotateplayers[1].name,
        'r_owed': 0,
        'b_owed': 0,
        's_owed': 0,
        'g_owed': 0,
        'r_earned': 0,
        'b_earned': 0,
        's_earned': 0,
        'g_earned': 0
      });
      this.set1rotateteams.push({
        'team_id': '23',
        'p1_name': this.rotateplayers[2].name,
        'p2_name': this.rotateplayers[3].name,
        'r_owed': 0,
        'b_owed': 0,
        's_owed': 0,
        'g_owed': 0,
        'r_earned': 0,
        'b_earned': 0,
        's_earned': 0,
        'g_earned': 0
      });
      this.set2rotateteams.push({
        'team_id': '02',
        'p1_name': this.rotateplayers[0].name,
        'p2_name': this.rotateplayers[2].name,
        'r_owed': 0,
        'b_owed': 0,
        's_owed': 0,
        'g_owed': 0,
        'r_earned': 0,
        'b_earned': 0,
        's_earned': 0,
        'g_earned': 0
      });
      this.set2rotateteams.push({
        'team_id': '13',
        'p1_name': this.rotateplayers[1].name,
        'p2_name': this.rotateplayers[3].name,
        'r_owed': 0,
        'b_owed': 0,
        's_owed': 0,
        'g_owed': 0,
        'r_earned': 0,
        'b_earned': 0,
        's_earned': 0,
        'g_earned': 0
      });
      this.set3rotateteams.push({
        'team_id': '03',
        'p1_name': this.rotateplayers[0].name,
        'p2_name': this.rotateplayers[3].name,
        'r_owed': 0,
        'b_owed': 0,
        's_owed': 0,
        'g_owed': 0,
        'r_earned': 0,
        'b_earned': 0,
        's_earned': 0,
        'g_earned': 0
      });
      this.set3rotateteams.push({
        'team_id': '12',
        'p1_name': this.rotateplayers[1].name,
        'p2_name': this.rotateplayers[2].name,
        'r_owed': 0,
        'b_owed': 0,
        's_owed': 0,
        'g_owed': 0,
        'r_earned': 0,
        'b_earned': 0,
        's_earned': 0,
        'g_earned': 0
      });
this.SixDis = false;
  }
  
finalSubmit() {
  this.FinalDis = true;
  console.log(this.set3rotateteams);
  for (const set1rotateteam of this.set1rotateteams) {
    // Player Index 0 Set 1
    if (this.rotateplayers[0].name === set1rotateteam.p1_name || this.rotateplayers[0].name === set1rotateteam.p2_name) {
      this.rotateplayers[0].r_earned = this.rotateplayers[0].r_earned + set1rotateteam.r_earned;
      this.rotateplayers[0].b_earned = this.rotateplayers[0].b_earned + set1rotateteam.b_earned;
      this.rotateplayers[0].s_earned = this.rotateplayers[0].s_earned + set1rotateteam.s_earned;
      this.rotateplayers[0].g_earned = this.rotateplayers[0].g_earned + set1rotateteam.g_earned;
    } else {
      this.rotateplayers[0].r_owed = this.rotateplayers[0].r_owed + set1rotateteam.r_earned;
      this.rotateplayers[0].b_owed = this.rotateplayers[0].b_owed +set1rotateteam.b_earned;
      this.rotateplayers[0].s_owed = this.rotateplayers[0].s_owed + set1rotateteam.s_earned;
      this.rotateplayers[0].g_owed = this.rotateplayers[0].g_owed + set1rotateteam.g_earned;
    }
    // Player Index 1 Set 1
    if (this.rotateplayers[1].name === set1rotateteam.p1_name || this.rotateplayers[1].name === set1rotateteam.p2_name) {
      this.rotateplayers[1].r_earned = this.rotateplayers[1].r_earned + set1rotateteam.r_earned;
      this.rotateplayers[1].b_earned = this.rotateplayers[1].b_earned + set1rotateteam.b_earned;
      this.rotateplayers[1].s_earned = this.rotateplayers[1].s_earned + set1rotateteam.s_earned;
      this.rotateplayers[1].g_earned = this.rotateplayers[1].g_earned + set1rotateteam.g_earned;
    } else {
      this.rotateplayers[1].r_owed = this.rotateplayers[1].r_owed + set1rotateteam.r_earned;
      this.rotateplayers[1].b_owed = this.rotateplayers[1].b_owed +set1rotateteam.b_earned;
      this.rotateplayers[1].s_owed = this.rotateplayers[1].s_owed + set1rotateteam.s_earned;
      this.rotateplayers[1].g_owed = this.rotateplayers[1].g_owed + set1rotateteam.g_earned;
    }
    // Player Index 2 Set 1
    if (this.rotateplayers[2].name === set1rotateteam.p1_name || this.rotateplayers[2].name === set1rotateteam.p2_name) {
        this.rotateplayers[2].r_earned = this.rotateplayers[2].r_earned + set1rotateteam.r_earned;
        this.rotateplayers[2].b_earned = this.rotateplayers[2].b_earned + set1rotateteam.b_earned;
        this.rotateplayers[2].s_earned = this.rotateplayers[2].s_earned + set1rotateteam.s_earned;
        this.rotateplayers[2].g_earned = this.rotateplayers[2].g_earned + set1rotateteam.g_earned;
      } else {
        this.rotateplayers[2].r_owed = this.rotateplayers[2].r_owed + set1rotateteam.r_earned;
        this.rotateplayers[2].b_owed = this.rotateplayers[2].b_owed +set1rotateteam.b_earned;
        this.rotateplayers[2].s_owed = this.rotateplayers[2].s_owed + set1rotateteam.s_earned;
        this.rotateplayers[2].g_owed = this.rotateplayers[2].g_owed + set1rotateteam.g_earned;
      }
    // Player Index 3 Set 1
    if (this.rotateplayers[3].name === set1rotateteam.p1_name || this.rotateplayers[3].name === set1rotateteam.p2_name) {
      this.rotateplayers[3].r_earned = this.rotateplayers[3].r_earned + set1rotateteam.r_earned;
      this.rotateplayers[3].b_earned = this.rotateplayers[3].b_earned + set1rotateteam.b_earned;
      this.rotateplayers[3].s_earned = this.rotateplayers[3].s_earned + set1rotateteam.s_earned;
      this.rotateplayers[3].g_earned = this.rotateplayers[3].g_earned + set1rotateteam.g_earned;
    } else {
      this.rotateplayers[3].r_owed = this.rotateplayers[3].r_owed + set1rotateteam.r_earned;
      this.rotateplayers[3].b_owed = this.rotateplayers[3].b_owed +set1rotateteam.b_earned;
      this.rotateplayers[3].s_owed = this.rotateplayers[3].s_owed + set1rotateteam.s_earned;
      this.rotateplayers[3].g_owed = this.rotateplayers[3].g_owed + set1rotateteam.g_earned;
    }
  }

  for (const set2rotateteam of this.set2rotateteams) {
    // Player Index 0 Set 2
    if (this.rotateplayers[0].name === set2rotateteam.p1_name || this.rotateplayers[0].name === set2rotateteam.p2_name) {
      this.rotateplayers[0].r_earned = this.rotateplayers[0].r_earned + set2rotateteam.r_earned;
      this.rotateplayers[0].b_earned = this.rotateplayers[0].b_earned + set2rotateteam.b_earned;
      this.rotateplayers[0].s_earned = this.rotateplayers[0].s_earned + set2rotateteam.s_earned;
      this.rotateplayers[0].g_earned = this.rotateplayers[0].g_earned + set2rotateteam.g_earned;
    } else {
      this.rotateplayers[0].r_owed = this.rotateplayers[0].r_owed + set2rotateteam.r_earned;
      this.rotateplayers[0].b_owed = this.rotateplayers[0].b_owed +set2rotateteam.b_earned;
      this.rotateplayers[0].s_owed = this.rotateplayers[0].s_owed + set2rotateteam.s_earned;
      this.rotateplayers[0].g_owed = this.rotateplayers[0].g_owed + set2rotateteam.g_earned;
    }
    // Player Index 1 Set 2
    if (this.rotateplayers[1].name === set2rotateteam.p1_name || this.rotateplayers[1].name === set2rotateteam.p2_name) {
      this.rotateplayers[1].r_earned = this.rotateplayers[1].r_earned + set2rotateteam.r_earned;
      this.rotateplayers[1].b_earned = this.rotateplayers[1].b_earned + set2rotateteam.b_earned;
      this.rotateplayers[1].s_earned = this.rotateplayers[1].s_earned + set2rotateteam.s_earned;
      this.rotateplayers[1].g_earned = this.rotateplayers[1].g_earned + set2rotateteam.g_earned;
    } else {
      this.rotateplayers[1].r_owed = this.rotateplayers[1].r_owed + set2rotateteam.r_earned;
      this.rotateplayers[1].b_owed = this.rotateplayers[1].b_owed +set2rotateteam.b_earned;
      this.rotateplayers[1].s_owed = this.rotateplayers[1].s_owed + set2rotateteam.s_earned;
      this.rotateplayers[1].g_owed = this.rotateplayers[1].g_owed + set2rotateteam.g_earned;
    }
    // Player Index 2 Set 2
    if (this.rotateplayers[2].name === set2rotateteam.p1_name || this.rotateplayers[2].name === set2rotateteam.p2_name) {
        this.rotateplayers[2].r_earned = this.rotateplayers[2].r_earned + set2rotateteam.r_earned;
        this.rotateplayers[2].b_earned = this.rotateplayers[2].b_earned + set2rotateteam.b_earned;
        this.rotateplayers[2].s_earned = this.rotateplayers[2].s_earned + set2rotateteam.s_earned;
        this.rotateplayers[2].g_earned = this.rotateplayers[2].g_earned + set2rotateteam.g_earned;
      } else {
        this.rotateplayers[2].r_owed = this.rotateplayers[2].r_owed + set2rotateteam.r_earned;
        this.rotateplayers[2].b_owed = this.rotateplayers[2].b_owed +set2rotateteam.b_earned;
        this.rotateplayers[2].s_owed = this.rotateplayers[2].s_owed + set2rotateteam.s_earned;
        this.rotateplayers[2].g_owed = this.rotateplayers[2].g_owed + set2rotateteam.g_earned;
      }
    // Player Index 3 Set 2
    if (this.rotateplayers[3].name === set2rotateteam.p1_name || this.rotateplayers[3].name === set2rotateteam.p2_name) {
      this.rotateplayers[3].r_earned = this.rotateplayers[3].r_earned + set2rotateteam.r_earned;
      this.rotateplayers[3].b_earned = this.rotateplayers[3].b_earned + set2rotateteam.b_earned;
      this.rotateplayers[3].s_earned = this.rotateplayers[3].s_earned + set2rotateteam.s_earned;
      this.rotateplayers[3].g_earned = this.rotateplayers[3].g_earned + set2rotateteam.g_earned;
    } else {
      this.rotateplayers[3].r_owed = this.rotateplayers[3].r_owed + set2rotateteam.r_earned;
      this.rotateplayers[3].b_owed = this.rotateplayers[3].b_owed +set2rotateteam.b_earned;
      this.rotateplayers[3].s_owed = this.rotateplayers[3].s_owed + set2rotateteam.s_earned;
      this.rotateplayers[3].g_owed = this.rotateplayers[3].g_owed + set2rotateteam.g_earned;
    }
  }

  for (const set3rotateteam of this.set3rotateteams) {
    // Player Index 0 Set 3
    if (this.rotateplayers[0].name === set3rotateteam.p1_name || this.rotateplayers[0].name === set3rotateteam.p2_name) {
      this.rotateplayers[0].r_earned = this.rotateplayers[0].r_earned + set3rotateteam.r_earned;
      this.rotateplayers[0].b_earned = this.rotateplayers[0].b_earned + set3rotateteam.b_earned;
      this.rotateplayers[0].s_earned = this.rotateplayers[0].s_earned + set3rotateteam.s_earned;
      this.rotateplayers[0].g_earned = this.rotateplayers[0].g_earned + set3rotateteam.g_earned;
    } else {
      this.rotateplayers[0].r_owed = this.rotateplayers[0].r_owed + set3rotateteam.r_earned;
      this.rotateplayers[0].b_owed = this.rotateplayers[0].b_owed +set3rotateteam.b_earned;
      this.rotateplayers[0].s_owed = this.rotateplayers[0].s_owed + set3rotateteam.s_earned;
      this.rotateplayers[0].g_owed = this.rotateplayers[0].g_owed + set3rotateteam.g_earned;
    }
    // Player Index 1 Set 3
    if (this.rotateplayers[1].name === set3rotateteam.p1_name || this.rotateplayers[1].name === set3rotateteam.p2_name) {
      this.rotateplayers[1].r_earned = this.rotateplayers[1].r_earned + set3rotateteam.r_earned;
      this.rotateplayers[1].b_earned = this.rotateplayers[1].b_earned + set3rotateteam.b_earned;
      this.rotateplayers[1].s_earned = this.rotateplayers[1].s_earned + set3rotateteam.s_earned;
      this.rotateplayers[1].g_earned = this.rotateplayers[1].g_earned + set3rotateteam.g_earned;
    } else {
      this.rotateplayers[1].r_owed = this.rotateplayers[1].r_owed + set3rotateteam.r_earned;
      this.rotateplayers[1].b_owed = this.rotateplayers[1].b_owed +set3rotateteam.b_earned;
      this.rotateplayers[1].s_owed = this.rotateplayers[1].s_owed + set3rotateteam.s_earned;
      this.rotateplayers[1].g_owed = this.rotateplayers[1].g_owed + set3rotateteam.g_earned;
    }
    // Player Index 2 Set 3
    if (this.rotateplayers[2].name === set3rotateteam.p1_name || this.rotateplayers[2].name === set3rotateteam.p2_name) {
        this.rotateplayers[2].r_earned = this.rotateplayers[2].r_earned + set3rotateteam.r_earned;
        this.rotateplayers[2].b_earned = this.rotateplayers[2].b_earned + set3rotateteam.b_earned;
        this.rotateplayers[2].s_earned = this.rotateplayers[2].s_earned + set3rotateteam.s_earned;
        this.rotateplayers[2].g_earned = this.rotateplayers[2].g_earned + set3rotateteam.g_earned;
      } else {
        this.rotateplayers[2].r_owed = this.rotateplayers[2].r_owed + set3rotateteam.r_earned;
        this.rotateplayers[2].b_owed = this.rotateplayers[2].b_owed +set3rotateteam.b_earned;
        this.rotateplayers[2].s_owed = this.rotateplayers[2].s_owed + set3rotateteam.s_earned;
        this.rotateplayers[2].g_owed = this.rotateplayers[2].g_owed + set3rotateteam.g_earned;
      }
    // Player Index 3 Set 3
    if (this.rotateplayers[3].name === set3rotateteam.p1_name || this.rotateplayers[3].name === set3rotateteam.p2_name) {
      this.rotateplayers[3].r_earned = this.rotateplayers[3].r_earned + set3rotateteam.r_earned;
      this.rotateplayers[3].b_earned = this.rotateplayers[3].b_earned + set3rotateteam.b_earned;
      this.rotateplayers[3].s_earned = this.rotateplayers[3].s_earned + set3rotateteam.s_earned;
      this.rotateplayers[3].g_earned = this.rotateplayers[3].g_earned + set3rotateteam.g_earned;
    } else {
      this.rotateplayers[3].r_owed = this.rotateplayers[3].r_owed + set3rotateteam.r_earned;
      this.rotateplayers[3].b_owed = this.rotateplayers[3].b_owed +set3rotateteam.b_earned;
      this.rotateplayers[3].s_owed = this.rotateplayers[3].s_owed + set3rotateteam.s_earned;
      this.rotateplayers[3].g_owed = this.rotateplayers[3].g_owed + set3rotateteam.g_earned;
    }
  }

  console.log(this.rotateplayers);
  this.PayoutDis = false;

}

valsSubmit() {
  this.ValsDis = true;
  this.rotateplayers[0].total_earned = ((this.rotateplayers[0].r_earned * this.scores[0].r_val) +
  (this.rotateplayers[0].b_earned * this.scores[0].b_val) +
  (this.rotateplayers[0].s_earned * this.scores[0].s_val) +
  (this.rotateplayers[0].g_earned * this.scores[0].g_val) -
  (this.rotateplayers[0].r_owed * this.scores[0].r_val) -
  (this.rotateplayers[0].b_owed * this.scores[0].b_val) -
  (this.rotateplayers[0].s_owed * this.scores[0].s_val) -
  (this.rotateplayers[0].g_owed * this.scores[0].g_val))

  this.rotateplayers[1].total_earned = ((this.rotateplayers[1].r_earned * this.scores[0].r_val) +
(this.rotateplayers[1].b_earned * this.scores[0].b_val) +
(this.rotateplayers[1].s_earned * this.scores[0].s_val) +
(this.rotateplayers[1].g_earned * this.scores[0].g_val) -
(this.rotateplayers[1].r_owed * this.scores[0].r_val) -
(this.rotateplayers[1].b_owed * this.scores[0].b_val) -
(this.rotateplayers[1].s_owed * this.scores[0].s_val) -
(this.rotateplayers[1].g_owed * this.scores[0].g_val))

this.rotateplayers[2].total_earned = ((this.rotateplayers[2].r_earned * this.scores[0].r_val) +
(this.rotateplayers[2].b_earned * this.scores[0].b_val) +
(this.rotateplayers[2].s_earned * this.scores[0].s_val) +
(this.rotateplayers[2].g_earned * this.scores[0].g_val) -
(this.rotateplayers[2].r_owed * this.scores[0].r_val) -
(this.rotateplayers[2].b_owed * this.scores[0].b_val) -
(this.rotateplayers[2].s_owed * this.scores[0].s_val) -
(this.rotateplayers[2].g_owed * this.scores[0].g_val))

this.rotateplayers[3].total_earned = ((this.rotateplayers[3].r_earned * this.scores[0].r_val) +
(this.rotateplayers[3].b_earned * this.scores[0].b_val) +
(this.rotateplayers[3].s_earned * this.scores[0].s_val) +
(this.rotateplayers[3].g_earned * this.scores[0].g_val) -
(this.rotateplayers[3].r_owed * this.scores[0].r_val) -
(this.rotateplayers[3].b_owed * this.scores[0].b_val) -
(this.rotateplayers[3].s_owed * this.scores[0].s_val) -
(this.rotateplayers[3].g_owed * this.scores[0].g_val))

console.log(this.rotateplayers[0].name + ' Earned: ' + this.rotateplayers[0].total_earned);
console.log(this.rotateplayers[1].name + ' Earned: ' + this.rotateplayers[1].total_earned);
console.log(this.rotateplayers[2].name + ' Earned: ' + this.rotateplayers[2].total_earned);
console.log(this.rotateplayers[3].name + ' Earned: ' + this.rotateplayers[3].total_earned);

}


ngOnInit() {
  this.AddDis = false;
  this.RemDis = false;
  this.LockDis = true;
  this.PayoutDis = true;
this.rotateplayers = [];
this.set1rotateteams = [];
this.set2rotateteams = [];
this.set3rotateteams = [];
this.scores = [];
this.id = 1;
this.SixDis = true;
this.scores.push({
  'r_val': 5,
  'b_val': 1,
  's_val': 1,
  'g_val': 1
});
}
}

