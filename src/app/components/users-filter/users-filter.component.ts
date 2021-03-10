import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import User from 'src/app/interfaces/user-interface';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-users-filter',
  templateUrl: './users-filter.component.html',
  styleUrls: ['./users-filter.component.sass']
})
export class UsersFilterComponent implements OnInit {

  public usersList: User[] = [];
  public citiesList: any = [];
  public companiesList: string[] = [];

  public dropdownList: any = [];
  public selectedItems = [];
  public dropdownSettings: IDropdownSettings = {};

  public nameFilterValue!: string;
  public companiesFilterValue: any = [];
  public cityFilterValue!: string;

  constructor(
    private apiService: ApiService,
    private sharedService: SharedService,
  ) {   }

  ngOnInit(): void {
    this.getAllLists();
  }

  private getAllLists() {
    this.apiService.getUsersListInfo().subscribe(res => {
      this.usersList = res;
      res.forEach(newArr => {
        this.companiesList.push(newArr.company.name);
        this.citiesList.push(newArr.address.city);
        this.completeDropdownList();
      })
    })

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  private completeDropdownList() {

    for (let i = 0; i < this.companiesList.length; i++) {
      this.dropdownList.push(this.companiesList[i]);
    }

    let newArr = Array.from(new Set(this.dropdownList));
    this.dropdownList = newArr;
  }


  public filter(){
    this.sharedService.nameFilterValue$.next(this.nameFilterValue);
    this.sharedService.cityFilterValue$.next(this.cityFilterValue);
  }

  public uncheckRadio(){
    console.log(this.dropdownList);
    console.log(this.companiesList);
  }

  public onItemSelect(item: any) {
    //console.log(item)
    this.sharedService.companyFilterValue$.next(item);

    //console.log(this.selectedItems)
    this.sharedService.companyFilterValue$.subscribe(res => {
      console.log(res)
    })
  }

  public onSelectAll(items: any) {
    console.log(items)
  }
}


