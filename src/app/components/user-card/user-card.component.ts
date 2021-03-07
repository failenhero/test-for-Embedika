import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/interfaces/user-interface';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.sass']
})
export class UserCardComponent implements OnInit {

  currentUser!: User;

  constructor(
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.currentUser= this.sharedService.currentUser;
  }

  backBtnClicked() {
    this.router.navigate(["/"])
  }

}
