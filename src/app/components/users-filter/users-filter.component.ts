import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import User from 'src/app/interfaces/user-interface';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-users-filter',
  templateUrl: './users-filter.component.html',
  styleUrls: ['./users-filter.component.sass']
})
export class UsersFilterComponent implements OnInit {

  public usersList: User[] = [];
  public citiesList: any = [];
  public companiesList: any = [];

  public nameFilterValue!: string;
  public companiesFilterValue: any = [];
  public cityFilterValue!: string;

  constructor(
    private apiService: ApiService,
    private sharedService: SharedService,
  ) {   }

  ngOnInit(): void {
    this.getUsersList();

  }

  private getUsersList() {
    this.apiService.getUsersListInfo().subscribe(res => {
      this.usersList = res;
      res.forEach(newArr => {
        this.companiesList.push(newArr.company.name);
        this.citiesList.push(newArr.address.city);
      })
    })
  }


  public filter(){
    this.sharedService.nameFilterValue$.next(this.nameFilterValue);
    this.sharedService.cityFilterValue$.next(this.cityFilterValue);
  }

  uncheckRadio(){

  }
}


