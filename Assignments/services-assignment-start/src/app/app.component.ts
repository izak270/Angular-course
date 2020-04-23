import { Component, OnInit } from '@angular/core';
import { UserSevice } from './user-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  action1: object;
  action2: object;
  constructor(private userService: UserSevice) {}
  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
    this.action1 = this.userService.activeToInactive;
    this.action2 = this.userService.inactiveToActive;
  }
}
