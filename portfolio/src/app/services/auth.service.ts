import { Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/User.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userSession = new BehaviorSubject<User>({} as User);
  private _userSession$ = this._userSession.asObservable();

  getUserSession(): Observable<User>{
   return this._userSession$;
  }
  setUserSession(user : User){
    this._userSession.next(user);
  }
  constructor() {
    this.setUserSession(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }
}
