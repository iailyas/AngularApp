import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  Users: User[] = [{
    id: 5,
    first_Name: '111',
    last_Name: '111',
    role: '111',
    email: '111',
    avatar: '111'
  }];
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.GetAll()
      .subscribe({
        next: (СUser) => { this.Users = СUser; console.log(this.Users); },
        error: (response: any) => { console.log(response); }
      })
  }
}
