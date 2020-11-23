import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  addUser(user: String): number {
    this.users.push(user);
    return this.users.length;
  }

  constructor() { }
  users: String[] = ['Janet', 'Michael', 'Joanne'];

  getUsers(): String[] {
    return this.users;
  }
}
