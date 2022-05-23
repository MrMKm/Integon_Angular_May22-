import { Component, OnInit } from '@angular/core';

import { User } from './../../shared/user';
import {UserService} from './../../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public users:User[] = [];
  public user:User;
  public passwordConfirm:string;
  public email:string;
  public password:string;
  public SignedIn:boolean = false;

  constructor(private userService:UserService) { }

  ngOnInit(){
    this.getUsers();
  }

  validateUser() {
    this.email = (<HTMLInputElement>document.getElementById("LoginEmail")).value;
    this.password = (<HTMLInputElement>document.getElementById("LoginPassword")).value;

    console.log(this.users);
    console.log(this.email);
    console.log(this.password);
    this.users.forEach(user => {
      if(user.email === this.email && user.password === this.password)
      {
        this.userService.getUserByID(user.id).subscribe(data => {
          this.user = data;
        });

        alert(`Welcome back ${user.name}!`);
        this.SignedIn = true;
      }
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
