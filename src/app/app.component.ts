import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hmr-form-demo';
  userName = 'Jeremy';
  count = 0;
  users: String[];

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }

  addUsers(user: String): void {
    this.userService.addUser(user);
  }
}
