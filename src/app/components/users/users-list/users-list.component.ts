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
    id: 0,
    first_Name: '',
    last_Name: '',
    role: '',
    email: '',
    avatar: ''
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
