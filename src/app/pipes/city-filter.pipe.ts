import { Pipe, PipeTransform } from '@angular/core';
import User from '../interfaces/user-interface';

@Pipe({
  name: 'cityFilter'
})
export class CityFilterPipe implements PipeTransform {

  transform(usersList: User[], radioValue: string = ''): User[] {
    if(!radioValue.trim){
      return usersList
    }

    return usersList.filter(user => {
      return user.address.city.toLowerCase().includes(radioValue.toLowerCase())
    })
  }
}
