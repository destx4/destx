import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class players {
  name: string;
  r_owed: number;
  b_owed: number;
  s_owed: number;
  g_owed: number;
  r_earned: number;
  b_earned: number;
  s_earned: number;
  g_earned: number;
  total_earned: number;
  
}

export class teams {
  team_id: string;
  p1_name: string;
  p2_name: string;
  r_owed: number;
  b_owed: number;
  s_owed: number;
  g_owed: number;
  r_earned: number;
  b_earned: number;
  s_earned: number;
  g_earned: number;
}

export class scorevals {
  r_val: number;
  b_val: number;
  s_val: number;
  g_val: number;
}


export class StandardService {

  constructor() { }
}
