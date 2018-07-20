import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SignInService {

  constructor(private http: HttpClient) {  }

  login(username: string, password: string) {
      return this.http.post<any>('${environment.apiUrl}/users/authenticate', {username: username, password: password}).pipe(map(user => {

        // login sukses jika user jika ada token jwt di response
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }

  logout() {
    // hapus user dari local storage agar bisa logout
    localStorage.removeItem('currentUser');
  }
}
