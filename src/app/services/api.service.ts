import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import User from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly allUsersURL = 'http://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient
  ) {  }

  public setCollectionSize() {
    return this.http.get<User[]>(this.allUsersURL);
  }

  public getAllUsers(
    pageNum: number,
    itemsOnPageNum: number
  ): Observable<User[]> {

    let users = this.http.get<User[]>(this.allUsersURL);
    return this.getPageItems(users, pageNum, itemsOnPageNum);

  }

  private getPageItems(
    planets: Observable<User[]>,
    pageNum: number,
    itemsOnPageNum: number
    ): Observable<User[]> {

      return planets.pipe(
        map((users: User[]) => {
          let startIndex = itemsOnPageNum * (pageNum - 1);
          return users.slice(startIndex, startIndex + itemsOnPageNum);
        })
      );

    }

}
