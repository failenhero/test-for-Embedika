import { Pipe, PipeTransform } from '@angular/core';
import User from '../interfaces/user-interface';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(usersList: User[], search: string = ''): User[] {
    if(!search.trim){
      return usersList
    }

    return usersList.filter(user => {
      return user.name.toLowerCase().includes(search.toLowerCase())
    })
  }

}
