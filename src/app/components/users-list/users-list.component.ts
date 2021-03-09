import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/interfaces/user-interface';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent implements OnInit {

  public users: User[] = [];

  public pageNum!: number;
  public itemsOnPageNum: number = 4;
  public collectionSize!: any;

  public paginationButtonsNumber!: any;

  public nameFilterValue!: string;
  public cityFilterValue!: string;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private sharedService: SharedService,
  ) {
    this.sharedService.nameFilterValue$.subscribe(res => {
      this.nameFilterValue = res;
    })
    this.sharedService.cityFilterValue$.subscribe(res => {
      this.cityFilterValue = res;
    })
   }

  ngOnInit(): void {
    this.pageNum = 1;
    this.refreshUsers();
    this.setCollectionSize();
  }

  private setCollectionSize() {
    this.apiService.getUsersListInfo().subscribe(res => {
      this.collectionSize = res.length;
      this.paginationButtonsNumber = Array.from({ length: this.collectionSize }, (v, i) =>  i + 1);
    })
  }

  private refreshUsers() {
    this.apiService.getAllUsers(this.pageNum, this.itemsOnPageNum)
      .subscribe(res => {
        this.users = res;
      })
  }

  public arrowClicked(user: any) {
    this.sharedService.currentUser = user;
    this.router.navigate(["/users/", user.name]);
  }

  public pageChange(currentPageNum: number) {
    this.pageNum = currentPageNum;
    this.refreshUsers();
  }

}
