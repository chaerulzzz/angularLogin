import { Component, OnInit } from '@angular/core';
import { first} from 'rxjs/operators';

import { User } from '../../../entity/users';
import { UserFormService } from '../../user/service/user-form.service';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  currentUser: User;
  users: User[];

  constructor(private userService: UserFormService) { }

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userService.doGetAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }

  private deleteUser(id: number) {
    this.userService.doDelete(id).pipe(first()).subscribe(() => {
        this.loadAllUsers();
    });
  }
}
