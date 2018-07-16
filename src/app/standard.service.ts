import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Players {
  id: number;
  name: string;
  owed: number;
  earned: number;
  
}

export class StandardService {

  constructor() { }
}
