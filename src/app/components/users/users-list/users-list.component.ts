import { Text } from '@angular/compiler';
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
    userName: '',
    email: '',
    avatar: ''
  }];
  UserName: string = '';
  User: User = {
    id: 0,
    first_Name: '',
    last_Name: '',
    role: '',
    userName: '',
    email: '',
    avatar: ''
  };
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.GetCurrentUserName()
      .subscribe({
        next: (response) => {
          this.User = response
          console.log(this.User);
        },
        error: (response: any) => { console.log(response); }
      })
    // this.usersService.GetCurrentUserByName(this.UserName)
    //   .subscribe({
    //     next: (response) => { this.Users = response; this.usersService.Users = response; console.log('2222'); console.log(response); },
    //     error: (response: any) => { console.log(response); }
    //   })

    // this.usersService.GetCurrentUserByName(this.usersService.GetCurrentUserName())
    //   .subscribe({
    //     next: (response) => { this.Users = response; console.log(this.UserName); },
    //     error: (response: any) => { console.log(response); }
    //   })

    // this.usersService.GetAll()
    //   .subscribe({
    //     next: (СUser) => { this.Users = СUser; console.log(this.Users); },
    //     error: (response: any) => { console.log(response); }
    //   })
  }
}
