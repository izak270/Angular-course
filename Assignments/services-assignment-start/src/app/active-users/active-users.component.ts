import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserSevice } from '../user-management.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  @Input() users: string[];
  constructor(private userService: UserSevice) {}
  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
    this.userService.CounterService(1);
    console.log(this.userService.activeToInactive);
    
  }
}
