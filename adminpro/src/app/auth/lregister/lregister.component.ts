import { User } from './../../shared/user';
import {UserService} from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lregister',
  templateUrl: './lregister.component.html',
  styleUrls: ['./lregister.component.css'],
  providers: [UserService]
})
export class LregisterComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  // public users:User[] = [];
  // public user:User;

  // public id:string;
  // public name:string;
  // public email:string;
  // public password:string;

  // constructor(private userService:UserService) { }

  // ngOnInit(){
  //   this.getUsers();
  // }

  // setUsers() {
  //   this.user = {
  //     id: this.id,
  //     name: this.name,
  //     email: this.email,
  //     password: this.password
  //   };

  //   this.userService.setUsers(this.user).subscribe(data => {
  //     this.users.push(data);
  //   });

  //   this.getUsers();
  // }

  // getUsers() {
  //   this.userService.getUsers().subscribe(data => {
  //     this.users = data;
  //   });
  // }

}
