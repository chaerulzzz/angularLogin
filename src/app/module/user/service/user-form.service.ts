import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../../entity/users';

@Injectable()
export class UserFormService {

  constructor(private http: HttpClient) { }

  doGetAll() {
      return this.http.get<User[]>('${environment.apiUrl}/users');
  }

  doGetByID(id: number) {
    return this.http.get('${environment.apiUrl}/users' + id);
  }

  doRegister(user: User) {
    return this.http.post('${environment.apiUrl}/users/register', user);
  }

  doUpdate(user: User) {
    return this.http.put('${environment.apiUrl}/users' + user.id, user);
  }

  doDelete(id: number) {
    return this.http.delete('${environment.apiUrl}/users' + id);
  }
}
