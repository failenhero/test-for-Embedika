import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import User from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public currentUser!: User;

  public nameFilterValue$: Subject<string> = new Subject<string>();
  public cityFilterValue$: Subject<string> = new Subject<string>();

  constructor() { }
}
