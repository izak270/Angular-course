import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserSevice } from '../user-management.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  constructor(private userService: UserSevice) {}

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
    this.userService.CounterService(0);
  }
}
