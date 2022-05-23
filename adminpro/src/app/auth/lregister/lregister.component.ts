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
  // constructor() { }

  // ngOnInit(): void {
  // }

  public users:User[] = [];
  public user:User;
  public passwordConfirm:string;

  constructor(private userService:UserService) { }

  ngOnInit(){
    this.getUsers();
  }

  setUsers() {
    this.passwordConfirm = (<HTMLInputElement>document.getElementById("UserPassword2")).value;

    this.user = {
      id: this.users.length + 1,
      name: (<HTMLInputElement>document.getElementById("UserName")).value,
      email: (<HTMLInputElement>document.getElementById("UserEmail")).value,
      password: (<HTMLInputElement>document.getElementById("UserPassword")).value,
    };

    if(this.passwordConfirm === this.user.password)
    {
      this.userService.setUsers(this.user).subscribe(data => {
        this.users.push(data);
      });

      this.getUsers();
    }

    else
      alert('Passwords are not equals');

  }

  getUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

}
