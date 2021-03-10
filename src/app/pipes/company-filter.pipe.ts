import { Pipe, PipeTransform } from '@angular/core';
import User from '../interfaces/user-interface';

@Pipe({
  name: 'companyFilter'
})
export class CompanyFilterPipe implements PipeTransform {

  transform(usersList: User[], companies: string = ''): User[] {

    if(!companies.trim){
      return usersList
    }

    return usersList.filter(user => {
      return user.company.name.toLowerCase().includes(companies.toLowerCase())
    })

  }
}
